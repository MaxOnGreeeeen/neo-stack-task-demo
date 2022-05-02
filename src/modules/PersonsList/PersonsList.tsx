import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import PersonCard from "../../components/PersonCard";

import { getPersons, setPersonsPage } from "../../store/actions/person";

import classes from "./personsList.module.scss";

const PersonsList: React.FC = () => {
  const { persons, error, loading, page, limit } = useTypedSelector(
    (state) => state.persons
  );

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleCreatePerson = () => {};

  const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPersonsPage(Number(e.currentTarget.textContent));
  };

  const { getPersons, setPersonsPage } = useActions();

  useEffect(() => {
    getPersons(page, limit);
  }, [page]);

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
        return <PersonCard key={number} person={person} />;
      })}
      <div className={classes.paginationBlock}>
        {pages.map((page) => {
          return <span onClick={handlePageClick}>{page}</span>;
        })}
      </div>
    </div>
  );
};

export default PersonsList;
