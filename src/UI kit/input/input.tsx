import React, { ReactNode } from "react";

import classes from "./input.module.scss";

export enum InputTypes {
  submit = "submit",
  text = "text",
}

interface IProps {
  onChange: (e: { target: HTMLInputElement }) => void;
  placeHolder: string;
  error: boolean;
  errorMessage?: ReactNode;
  type?: InputTypes;
  name?: string;
  value?: string;
}

const Input: React.FC<IProps> = ({
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
      />
      <label className={error ? classes.errorMessage : classes.disabledLabel}>
        <div className={classes.errorEmpty}>
          {error ? <span>{errorMessage}</span> : <div />}
        </div>
      </label>
    </div>
  );
};

export default Input;
