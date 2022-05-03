import React, { ChangeEvent, useState } from "react";

import classes from "./createPersonForm.module.scss";
import Input from "../../UI kit/input";
import Button from "../../UI kit/button";
import { ButtonVariant } from "../../UI kit/button/button";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Person } from "../../types/person";

interface CreatePersonFormProps {
  submitForm: () => void;
  person?: Person;
  confirmMessage: string;
}
const CreateEditPersonForm: React.FC<CreatePersonFormProps> = ({
  submitForm,
  person,
}) => {
  const { name, lastName, disabled } = useTypedSelector((state) => state.form);

  const { editPersonName, editPersonLastname } = useActions();

  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");

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

  const validateNameField = (): string => {
    return "";
  };

  const validateLastnameField = (): string => {
    return "";
  };

  return (
    <form className={classes.mainForm}>
      <label>Введите имя сотрудника</label>
      <Input
        value={name}
        onChange={onChangeNameFieldHandler}
        placeHolder={"Имя сотрудника"}
        error={errorNameMessageCheck}
        errorMessage={nameErrorMessage}
      />
      <label>Введите фамилию сотрудника</label>
      <Input
        onChange={onChangeLastnameFieldHandler}
        placeHolder={"Фамилия сотрудника"}
        error={errorLastNameMessageCheck}
        errorMessage={lastNameErrorMessage}
        value={lastName}
      />
      <Button onClick={submitForm} variant={ButtonVariant.default}>
        {"Создать сотрудника"}
      </Button>
    </form>
  );
};

export default CreateEditPersonForm;
