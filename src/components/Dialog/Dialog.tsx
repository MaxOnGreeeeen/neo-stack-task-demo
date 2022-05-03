import React, { ReactNode } from "react";

import Button, { ButtonVariant } from "../../UI kit/button/button";

import closeIcon from "../../assets/static/icons/closeIcon.svg";

import classes from "./dialog.module.scss";

interface DialogProps {
  active: boolean;
  children: ReactNode | undefined;
  onClose: (e: React.MouseEvent) => void;
  title?: string;
  overwrite?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  active,
  children,
  onClose,
  title,
  overwrite,
}) => {
  const handleOnContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={onClose}
      style={{ zIndex: overwrite ? 1000 : 100 }}
    >
      <div
        className={
          active
            ? `${classes.modalContent} ${classes.active}`
            : classes.modalContent
        }
        onClick={handleOnContentClick}
      >
        <div className={classes.modalHeader}>
          <h2>{title}</h2>
          <Button onClick={onClose} variant={ButtonVariant.rounded}>
            <img src={closeIcon} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
