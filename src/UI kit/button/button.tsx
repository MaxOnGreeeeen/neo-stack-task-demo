import React, { MouseEventHandler, ReactNode } from "react";

import classes from "./button.module.scss";

export enum ButtonVariant {
  pagination = "pagination",
  default = "default",
  rounded = "rounded",
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
        variant === ButtonVariant.pagination
          ? `${classes.buttonDefault} ${classes.paginateButton}`
          : classes.buttonDefault
      }
      style={{
        border: active ? "1px solid green" : "inherit",
        borderRadius: variant === ButtonVariant.rounded ? "50%" : "",
        backgroundColor: variant === ButtonVariant.rounded ? "none" : "#e0e0e0",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
