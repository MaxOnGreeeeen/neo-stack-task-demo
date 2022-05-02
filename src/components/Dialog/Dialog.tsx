import React, { ReactNode } from "react";

import Button, { ButtonVariant } from "../../UI kit/button/button";

import closeIcon from "../../assets/static/icons/closeIcon.svg";

import classes from "./dialog.module.scss";

interface DialogProps {
  active: boolean;
  children: ReactNode | undefined;
  onClose: (e: React.MouseEvent) => void;
  title?: string;
}

const Dialog: React.FC<DialogProps> = ({
  active,
  children,
  onClose,
  title,
}) => {
  const handleOnContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
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
          <h1>{title}</h1>
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
