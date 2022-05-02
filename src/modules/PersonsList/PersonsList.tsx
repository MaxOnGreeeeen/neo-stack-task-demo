import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { getPersons, setPersonsPage } from "../../store/actions/person";

import PersonCard from "../../components/PersonCard";
import Button, { ButtonVariant } from "../../UI kit/button/button";

import classes from "./personsList.module.scss";
import { Person } from "../../types/person";

const PersonsList: React.FC = () => {
  const { persons, error, loading, page, limit, pages } = useTypedSelector(
    (state) => state.persons
  );

  useEffect(() => {
    getPersons(page, limit);
  }, [page]);

  const handleCreatePerson = () => {};

  const handlePageClick = (e: React.MouseEvent) => {
    setPersonsPage(Number(e.currentTarget.textContent));
  };

  const { getPersons, setPersonsPage, deletePerson } = useActions();

  const checkActivePage = (pageNumber: string | number) => {
    return Number(pageNumber) === page;
  };

  const handleEditPerson = (person: Person) => {};

  const handleDeletePerson = (person: Person) => {
    deletePerson(Number(person.id));
  };

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
      {persons.map((person, number) => {
        return (
          <PersonCard
            deleteHandler={handleDeletePerson}
            editHandler={handleDeletePerson}
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
