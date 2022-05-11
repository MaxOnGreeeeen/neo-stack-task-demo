import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import PersonCard from "../../components/PersonCard";
import CreateEditPersonForm from "../../components/CreateEditPersonForm";
import { Dialog } from "../../components";

import {
  Button,
  ConfirmActionForm,
  Preloader,
  ToastNotification,
} from "../../UI kit";

import { ButtonVariant } from "../../UI kit/button/button";

import { Person } from "../../types/person";

import Pagination from "@mui/material/Pagination";

import classes from "./personsList.module.scss";
import { ToastVariants } from "../../UI kit/toastNotitifcation/toastNotification";
import { createToast } from "../../store/actions/toastActions";

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
    confirmCreateAction,
    confirmEditAction,
    setCreateDialogVisible,
    setEditDialogVisible,
    disproveAction,
    clearFormData,
    setTotalPersonsAmount,
    createToast,
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

  const { message, activeCreateDialog, activeEditDialog } = useTypedSelector(
    (state) => state.confirm
  );

  const { toasts } = useTypedSelector((state) => state.toasts);

  const {
    activeEdit,
    activeCreate,
    name,
    lastName,
    id: personId,
  } = useTypedSelector((state) => state.form);

  useEffect(() => {
    getPersons(page, limit);
  }, [page, personsTotalQuantity]);

  useEffect(() => {
    if (toastMessage !== "") {
      createToast({
        type: ToastVariants.success,
        message: toastMessage,
        id: Date.now(),
      });
    }

    if (error !== "") {
      createToast({
        type: ToastVariants.error,
        message: error,
        id: Date.now(),
      });
    }
  }, [error, toastMessage]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPersonsPage(value);
  };

  const handleEditPerson = (person: Person) => {
    setModalVisibility(true, "edit");
    setPersonEdit(person);
  };

  const handleCreatePerson = () => {
    setModalVisibility(true, "create");
  };

  const handleDeletePerson = (person: Person) => {
    deletePerson(Number(person.id));

    setTotalPersonsAmount(personsTotalQuantity, -1, limit);
  };

  const onModalCreateClose = () => {
    setModalVisibility(false, "create");
    clearFormData();
  };

  const onModalEditClose = () => {
    setModalVisibility(false, "edit");
    clearFormData();
  };

  const submitCreatePersonForm = () => {
    setMessage("Подтвердить создание пользователя?");
    setCreateDialogVisible(true);
  };

  const submitEditPersonForm = () => {
    setMessage("Подтвердить сохранение изменений?");
    setEditDialogVisible(true);
  };

  const handleExitEditing = () => {
    disproveAction();
  };

  const handleConfirmEdit = () => {
    confirmEditAction();

    const editedPerson: Person = {
      id: personId,
      name: name,
      lastName: lastName,
    };

    setModalVisibility(false, "edit");

    editPerson(editedPerson);

    clearFormData();
  };

  const handleConfirmCreating = () => {
    confirmCreateAction();

    const createdPerson: Person = {
      id: null,
      name: name,
      lastName: lastName,
    };

    setModalVisibility(false, "create");
    createPerson(createdPerson);

    setTotalPersonsAmount(personsTotalQuantity, 1, limit);

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
          <Dialog
            active={activeCreateDialog}
            onClose={handleExitEditing}
            overwrite={true}
          >
            <ConfirmActionForm
              message={message}
              onConfirm={handleConfirmCreating}
              onClose={handleExitEditing}
            />
          </Dialog>
          <Dialog
            active={activeCreate}
            onClose={onModalCreateClose}
            title={"Добавить сотрудника"}
          >
            <CreateEditPersonForm
              buttonTitle={"сохранить"}
              submitForm={submitCreatePersonForm}
              confirmMessage={message}
            />
          </Dialog>
          <Button onClick={handleCreatePerson} variant={ButtonVariant.submit}>
            {"Добавить сотрудника"}
          </Button>
        </div>
        <hr></hr>
        <div className={classes.theadInfo}>
          <h2>№</h2>
          <h2>Имя</h2>
          <h2>Фамилия</h2>
        </div>
        <hr></hr>
      </div>
      <Dialog
        active={activeEditDialog}
        onClose={handleExitEditing}
        overwrite={true}
      >
        <ConfirmActionForm
          message={message}
          onConfirm={handleConfirmEdit}
          onClose={handleExitEditing}
        />
      </Dialog>
      <Dialog
        active={activeEdit}
        onClose={onModalEditClose}
        title={"Редактировать сотрудника"}
      >
        <CreateEditPersonForm
          buttonTitle={"сохранить "}
          submitForm={submitEditPersonForm}
          confirmMessage={message}
        />
      </Dialog>

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
