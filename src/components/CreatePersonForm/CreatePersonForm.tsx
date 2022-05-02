import React from "react";

import classes from "./createPersonForm.module.scss";
import Input from "../../UI kit/input";
import Button from "../../UI kit/button";
import { ButtonVariant } from "../../UI kit/button/button";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CreatePersonFormProps {
  submitForm: () => void;
}
const CreatePersonForm: React.FC<CreatePersonFormProps> = ({ submitForm }) => {
  const { name, lastName, disabled } = useTypedSelector((state) => state.form);


  return (
    <form className={classes.mainForm}>
      <Input />
      <Input />
      <Button onClick={submitForm} variant={ButtonVariant.default}>
        {"Создать сотрудника"}
      </Button>
    </form>
  );
};

export default CreatePersonForm;
