import React, { MouseEventHandler, ReactNode } from "react";

import classes from "./button.module.scss";

export enum ButtonVariant {
  pagination = "pagination",
  default = "default",
}

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void | undefined;
  children: string | number | ReactNode;
  variant: ButtonVariant | null;
  active?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  active,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === ButtonVariant.default
          ? classes.buttonDefault
          : `${classes.buttonDefault} ${classes.paginateButton}`
      }
      style={{ border: active ? "1px solid green" : "inherit" }}
    >
      {children}
    </button>
  );
};

export default Button;
