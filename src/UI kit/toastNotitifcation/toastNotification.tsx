import React from "react";

import { useActions } from "../../hooks/useActions";

import { Button } from "../index";
import { ButtonVariant } from "../button/button";

import classes from "./toastNotification.module.scss";

export enum ToastVariants {
  warning = "warning",
  success = "success",
  info = "info",
  error = "error",
}

interface IProps {
  active?: boolean;
  variant: ToastVariants;
  message: string;
  id: number | null;
}

export interface MatchesTypes {
  code: ToastVariants;
  name: string;
}

const ToastNotification: React.FC<IProps> = ({ variant, message, id }) => {
  const { deleteToast } = useActions();

  const notificationMatches: Array<MatchesTypes> = [
    { code: ToastVariants.success, name: "Успешно!" },
    { code: ToastVariants.error, name: "Ошибка!" },
    { code: ToastVariants.info, name: "Уведомление!" },
    { code: ToastVariants.warning, name: "Предупреждение!" },
  ];

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
        <h3>{notificationMatches.find(item => item.code === variant)?.name || ''}</h3>
        <p>{message}</p>
        <div className={classes.notificationLoader} />
      </div>
    </div>
  );
};

export default ToastNotification;
