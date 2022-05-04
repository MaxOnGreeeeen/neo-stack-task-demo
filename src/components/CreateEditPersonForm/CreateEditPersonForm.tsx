import React, { useEffect, useState } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Person } from "../../types/person";

import { Utils } from "../../helpers/Utils";

import { Button, Input } from "../../UI kit";

import { ButtonTypes, ButtonVariant } from "../../UI kit/button/button";

import classes from "./createPersonForm.module.scss";
import { InputTypes } from "../../UI kit/input/input";

interface CreatePersonFormProps {
  submitForm: () => void;
  person?: Person;
  confirmMessage: string;
  buttonTitle: string;
}
const CreateEditPersonForm: React.FC<CreatePersonFormProps> = ({
  submitForm,
  person,
  buttonTitle,
  confirmMessage,
}) => {
  const { name, lastName } = useTypedSelector((state) => state.form);

  useEffect(() => {
    validateFields(name, lastName);
  }, [name, lastName]);

  const { editPersonName, editPersonLastname } = useActions();

  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const [errorNameMessageCheck, setErrorNameMessageCheck] =
    useState<boolean>(false);
  const [errorLastNameMessageCheck, setErrorLastNameMessageCheck] =
    useState<boolean>(false);

  const onChangeNameFieldHandler = (e: { target: HTMLInputElement }) => {
    editPersonName(e.target.value);
  };

  const onChangeLastnameFieldHandler = (e: { target: HTMLInputElement }) => {
    editPersonLastname(e.target.value);
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateFields(name, lastName)) {
      submitForm();
    }
  };

  const validateFields = (field: string, nextField: string): boolean => {
    const nameError = Utils.validateNameLastNameField(field);
    const lastNameError = Utils.validateNameLastNameField(nextField);

    if (nameError === "") {
      setNameErrorMessage("");
      setErrorNameMessageCheck(false);
    }

    if (lastNameError === "") {
      setLastNameErrorMessage("");
      setErrorLastNameMessageCheck(false);
    }

    if (nameError === "" && lastNameError === "") {
      setDisabled(false);
    }

    if (nameError !== "") {
      setNameErrorMessage(nameError);
      setErrorNameMessageCheck(true);

      setDisabled(true);
    }

    if (lastNameError !== "") {
      setLastNameErrorMessage(lastNameError);
      setErrorLastNameMessageCheck(true);

      setDisabled(true);
    }

    return disabled;
  };

  return (
    <form className={classes.mainForm} onSubmit={submitFormHandler}>
      <label className={classes.labelInput}>Введите имя сотрудника</label>
      <Input
        type={InputTypes.text}
        value={name}
        onChange={onChangeNameFieldHandler}
        placeHolder={"Имя сотрудника"}
        error={errorNameMessageCheck}
        errorMessage={nameErrorMessage}
      />
      <label className={classes.labelInput}>Введите фамилию сотрудника</label>
      <Input
        type={InputTypes.text}
        onChange={onChangeLastnameFieldHandler}
        placeHolder={"Фамилия сотрудника"}
        error={errorLastNameMessageCheck}
        errorMessage={lastNameErrorMessage}
        value={lastName}
      />
      <Button
        type={ButtonTypes.submit}
        disabled={disabled}
        variant={ButtonVariant.submit}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default CreateEditPersonForm;
