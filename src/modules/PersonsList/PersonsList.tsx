import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import { PersonForm, Dialog, PersonCard } from "../../components";

import {
  Button,
  ConfirmActionForm,
  Preloader,
  ToastNotification,
} from "../../UI kit";
import Pagination from "@mui/material/Pagination";

import { ButtonVariant } from "../../UI kit/button/button";
import { ToastVariants } from "../../UI kit/toastNotitifcation/toastNotification";

import { Person } from "../../types/person";
import { ConfirmFormTypes } from "../../types/confirm";
import { FormTypes } from "../../types/form";

import classes from "./personsList.module.scss";

const PersonsList: React.FC = () => {
  const {
    getPersons,
    setPersonsPage,
    createPerson,
    deletePerson,
    editPerson,
    setModalVisibility,
    setPersonEdit,
    setMessage,
    disproveAction,
    clearFormData,
    setTotalPersonsAmount,
    createToast,
    confirmAction,
    setFormVisible,
  } = useActions();

  const {
    persons,
    error,
    loading,
    page,
    limit,
    personsTotalQuantity,
    pagesQuantity,
    toastMessage,
  } = useTypedSelector((state) => state.persons);

  const { confirmForms } = useTypedSelector((state) => state.confirm);

  const { forms } = useTypedSelector((state) => state.form);

  const createForm = useTypedSelector((state) =>
    state.form.forms.find((form) => form.type === FormTypes.CREATE)
  );

  const editForm = useTypedSelector((state) =>
    state.form.forms.find((form) => form.type === FormTypes.EDIT)
  );

  const { toasts } = useTypedSelector((state) => state.toasts);

  useEffect(() => {
    getPersons(page, limit);
  }, [page, personsTotalQuantity]);

  useEffect(() => {
    const randomToastId = Date.now();

    if (toastMessage !== "") {
      createToast({
        type: ToastVariants.success,
        message: toastMessage,
        id: randomToastId,
      });
    }

    if (error !== "") {
      createToast({
        type: ToastVariants.error,
        message: error,
        id: randomToastId,
      });
    }
  }, [error, toastMessage]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPersonsPage(value);
  };

  const handleEditPerson = (person: Person) => {
    setModalVisibility(true, FormTypes.EDIT);
    setPersonEdit(person);
  };

  const handleCreatePerson = () => {
    setModalVisibility(true, FormTypes.CREATE);
  };

  const handleDeletePerson = (person: Person) => {
    deletePerson(Number(person.id));

    setTotalPersonsAmount(personsTotalQuantity, -1, limit);
  };

  const onModalCreateClose = () => {
    setModalVisibility(false, FormTypes.CREATE);
    clearFormData();
  };

  const onModalEditClose = () => {
    setModalVisibility(false, FormTypes.EDIT);
    clearFormData();
  };

  const submitCreatePersonForm = () => {
    setMessage("Подтвердить создание пользователя?", ConfirmFormTypes.CREATE);
    setFormVisible(ConfirmFormTypes.CREATE, true);
  };

  const submitEditPersonForm = () => {
    setMessage("Подтвердить сохранение изменений?", ConfirmFormTypes.EDIT);
    setFormVisible(ConfirmFormTypes.EDIT, true);
  };

  const handleExitEditing = () => {
    disproveAction(ConfirmFormTypes.EDIT);
  };

  const handleExitCreating = () => {
    disproveAction(ConfirmFormTypes.CREATE);
  };

  const handleConfirmEdit = () => {
    confirmAction(ConfirmFormTypes.EDIT);

    if (editForm !== undefined) {
      const editedPerson: Person = {
        id: editForm.id,
        name: editForm.name,
        lastName: editForm.lastName,
      };

      setModalVisibility(false, FormTypes.EDIT);

      editPerson(editedPerson);
    }

    clearFormData();
  };

  const handleConfirmCreating = () => {
    confirmAction(ConfirmFormTypes.CREATE);

    if (createForm !== undefined) {
      const createdPerson: Person = {
        id: null,
        name: createForm.name,
        lastName: createForm.lastName,
      };
      setModalVisibility(false, FormTypes.CREATE);

      createPerson(createdPerson);
      setTotalPersonsAmount(personsTotalQuantity, 1, limit);
    }

    clearFormData();
  };

  const Persons = persons.map((person, number) => {
    return (
      <PersonCard
        deleteHandler={handleDeletePerson}
        editHandler={handleEditPerson}
        key={number}
        person={person}
      />
    );
  });

  return (
    <div className={classes.mainBlock}>
      <div className={classes.titleForCards}>
        <div className={classes.titleBlock}>
          <h1>Список сотрудников</h1>
          {confirmForms.map((confirmForm) => {
            if (confirmForm.type === ConfirmFormTypes.CREATE) {
              return (
                <Dialog
                  open={confirmForm.active}
                  onClose={handleExitCreating}
                  overwrite={true}
                >
                  <ConfirmActionForm
                    message={confirmForm.message}
                    onConfirm={handleConfirmCreating}
                    onClose={handleExitEditing}
                  />
                </Dialog>
              );
            }

            if (confirmForm.type === ConfirmFormTypes.EDIT) {
              return (
                <Dialog
                  open={confirmForm.active}
                  onClose={handleExitEditing}
                  overwrite={true}
                >
                  <ConfirmActionForm
                    message={confirmForm.message}
                    onConfirm={handleConfirmEdit}
                    onClose={handleExitEditing}
                  />
                </Dialog>
              );
            }
          })}

          {forms.map((form) => {
            if (form.type === FormTypes.CREATE) {
              return (
                <Dialog
                  open={form.active}
                  onClose={onModalCreateClose}
                  title={"Добавить сотрудника"}
                >
                  <PersonForm
                    name={form.name}
                    lastName={form.lastName}
                    type={form.type}
                    buttonTitle={"сохранить"}
                    submitForm={submitCreatePersonForm}
                  />
                </Dialog>
              );
            }

            if (form.type === FormTypes.EDIT) {
              return (
                <Dialog
                  open={form.active}
                  onClose={onModalEditClose}
                  title={"Редактировать сотрудника"}
                >
                  <PersonForm
                    name={form.name}
                    lastName={form.lastName}
                    type={form.type}
                    buttonTitle={"сохранить "}
                    submitForm={submitEditPersonForm}
                  />
                </Dialog>
              );
            }
          })}

          <Button onClick={handleCreatePerson} variant={ButtonVariant.submit}>
            {"Добавить сотрудника"}
          </Button>
        </div>
        <hr />
        <div className={classes.theadInfo}>
          <h2>№</h2>
          <h2>Имя</h2>
          <h2>Фамилия</h2>
        </div>
        <hr />
      </div>

      {loading ? <Preloader /> : Persons}

      <Pagination
        sx={{ marginTop: "1em" }}
        count={pagesQuantity}
        defaultPage={1}
        page={page}
        onChange={handleChange}
        size="large"
      />

      <div className={classes.toastBlock}>
        {toasts.map((toast) => {
          return (
            <ToastNotification
              variant={toast.type}
              message={toast.message}
              id={toast.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PersonsList;
