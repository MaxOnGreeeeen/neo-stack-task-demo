import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import PersonCard from "../../components/PersonCard";
import CreateEditPersonForm from "../../components/CreatePersonForm";
import { Dialog } from "../../components";

import ConfirmActionForm from "../../UI kit/confirmActionForm";
import Button, { ButtonVariant } from "../../UI kit/button/button";

import { Person } from "../../types/person";

import classes from "./personsList.module.scss";
import { setModalVisibility } from "../../store/actions/formAction";

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
  } = useActions();

  const { persons, error, loading, page, limit, pages } = useTypedSelector(
    (state) => state.persons
  );

  const { message, activeCreateDialog, activeEditDialog } = useTypedSelector(
    (state) => state.confirm
  );

  const {
    activeEdit,
    activeCreate,
    person: modalEditedPerson,
    name,
    lastName,
    id: personId,
  } = useTypedSelector((state) => state.form);

  useEffect(() => {
    getPersons(page, limit);
  }, [page]);

  const handlePageClick = (e: React.MouseEvent) => {
    setPersonsPage(Number(e.currentTarget.textContent));
  };

  const checkActivePage = (pageNumber: string | number) => {
    return Number(pageNumber) === page;
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
  };

  const onModalCreateClose = () => {
    setModalVisibility(false, "create");
    clearFormData();
  };

  const onModalEditClose = () => {
    setModalVisibility(false, "edit");
    clearFormData();
  };

  const submitCreatePersonForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setMessage("Подтвердить создание пользователя?");
    setCreateDialogVisible(true);
  };

  const submitEditPersonForm = (e: React.MouseEvent) => {
    e.preventDefault();
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
    clearFormData();
  };

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

      {persons.map((person, number) => {
        return (
          <PersonCard
            deleteHandler={handleDeletePerson}
            editHandler={handleEditPerson}
            key={number}
            person={person}
          />
        );
      })}
      <div className={classes.paginationBlock}>
        {pages.map((pageNumber) => {
          return (
            <Button
              variant={ButtonVariant.pagination}
              onClick={handlePageClick}
              active={checkActivePage(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PersonsList;
