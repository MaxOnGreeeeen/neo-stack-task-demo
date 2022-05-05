import React from "react";

import { Button } from "../index";
import { ButtonVariant } from "../button/button";

import classes from "./toastNotification.module.scss";
import { useActions } from "../../hooks/useActions";

export enum ToastVariants {
  warning = "warning",
  success = "success",
  info = "info",
  error = "error",
}

interface ToastProps {
  active?: boolean;
  variant: ToastVariants;
  message: string;
  id: number;
}

const ToastNotification: React.FC<ToastProps> = ({
  active,
  variant,
  message,
  id,
}) => {
  const { deleteToast } = useActions();

  const switchClassname = (variant: ToastVariants): string => {
    switch (variant) {
      case ToastVariants.success:
        return `${classes.toastNotification} ${classes.success}`;

      case ToastVariants.error:
        return `${classes.toastNotification} ${classes.error}`;

      case ToastVariants.info:
        return `${classes.toastNotification} ${classes.info}`;

      case ToastVariants.warning:
        return `${classes.toastNotification} ${classes.warning}`;

      default:
        return classes.toastNotification;
    }
  };

  const handleDeleteToast = () => {
    deleteToast(id);
  };
  return (
    <div className={switchClassname(variant)} onClick={handleDeleteToast}>
      <Button variant={ButtonVariant.rounded} onClick={handleDeleteToast}>
        X
      </Button>
      <div className={classes.contentBlock}>
        <h3>{variant}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ToastNotification;
