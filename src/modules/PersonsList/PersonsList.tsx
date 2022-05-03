import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { getPersons, setPersonsPage } from "../../store/actions/person";

import PersonCard from "../../components/PersonCard";
import Button, { ButtonVariant } from "../../UI kit/button/button";

import classes from "./personsList.module.scss";
import { Person } from "../../types/person";
import { Dialog } from "../../components";
import CreateEditPersonForm from "../../components/CreatePersonForm";

const PersonsList: React.FC = () => {
  const { persons, error, loading, page, limit, pages } = useTypedSelector(
    (state) => state.persons
  );

  const { active } = useTypedSelector((state) => state.form);

  const {
    getPersons,
    setPersonsPage,
    deletePerson,
    setModalVisibility,
    setPersonEdit,
  } = useActions();

  useEffect(() => {
    getPersons(page, limit);
  }, [page]);

  const handleCreatePerson = () => {};

  const handlePageClick = (e: React.MouseEvent) => {
    setPersonsPage(Number(e.currentTarget.textContent));
  };

  const checkActivePage = (pageNumber: string | number) => {
    return Number(pageNumber) === page;
  };

  const handleEditPerson = (person: Person) => {
    setModalVisibility(true);
    setPersonEdit(person);
  };

  const handleDeletePerson = (person: Person) => {
    deletePerson(Number(person.id));
  };

  const onModalClose = () => {
    setModalVisibility(false);
  };

  const submitCreatePersonForm = () => {};

  return (
    <div className={classes.mainBlock}>
      <div className={classes.titleForCards}>
        <div className={classes.titleBlock}>
          <h1>Список сотрудников</h1>
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
        active={active}
        onClose={onModalClose}
        title={"Редактировать сотрудника"}
      >
        <CreateEditPersonForm
          submitForm={submitCreatePersonForm}
          confirmMessage={"Подтвердить сохранение изменений?"}
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
