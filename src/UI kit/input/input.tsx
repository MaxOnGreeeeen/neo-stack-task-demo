import React, { ReactNode } from "react";

import classes from "./input.module.scss";

interface InputProps {
  onChange: (e: { target: HTMLInputElement }) => void;
  placeHolder: string;
  error: boolean;
  errorMessage?: ReactNode;
  type?: string;
  name?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  placeHolder,
  error,
  errorMessage,
  type,
  name,
  value,
}) => {
  return (
    <div className={classes.inputBlock}>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
        className={classes.inputField}
        name={name}
        value={value}
      ></input>
      <label className={error ? classes.errorMessage : classes.disabledLabel}>
        <span>{errorMessage}</span>
      </label>
    </div>
  );
};

export default Input;
