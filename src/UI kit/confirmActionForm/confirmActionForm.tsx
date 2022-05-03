import React from "react";

import classes from "./confirmActionForm.module.scss";
import Button from "../button";
import { ButtonVariant } from "../button/button";

interface ConfirmFormProps {
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmActionForm: React.FC<ConfirmFormProps> = ({
  message,
  onConfirm,
  onClose,
}) => {
  return (
    <div className={classes.confirmActionBlock}>
      <span className={classes.confirmMessage}>{message}</span>
      <div className={classes.buttonsBlock}>
        <Button onClick={onConfirm} variant={ButtonVariant.default}>
          {"Да"}
        </Button>
        <Button onClick={onClose} variant={ButtonVariant.default}>
          {"Нет"}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmActionForm;
