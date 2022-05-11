import React from "react";

import { useActions } from "../../hooks/useActions";

import { Button } from "../index";
import { ButtonVariant } from "../button/button";

import classes from "./toastNotification.module.scss";

export enum ToastVariants {
  warning = "предупреждение",
  success = "успешно",
  info = "уведомление",
  error = "ошибка",
}

interface ToastProps {
  active?: boolean;
  variant: ToastVariants;
  message: string;
  id: number | null;
}

export interface MatchesTypes {
  code: ToastVariants;
  name: string;
}

const ToastNotification: React.FC<ToastProps> = ({ variant, message, id }) => {
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

  const getStringMessageValue = (variant: ToastVariants): string => {
    let notification: string = "";

    notificationMatches.every((match) => {
      if (match.code === variant) {
        notification = match.name;
      }
    });
    return notification;
  };
  return (
    <div className={switchClassname(variant)} onClick={handleDeleteToast}>
      <Button variant={ButtonVariant.rounded} onClick={handleDeleteToast}>
        X
      </Button>
      <div className={classes.contentBlock}>
        <h3>{getStringMessageValue(variant)}</h3>
        <p>{message}</p>
        <div className={classes.notificationLoader} />
      </div>
    </div>
  );
};

export default ToastNotification;
