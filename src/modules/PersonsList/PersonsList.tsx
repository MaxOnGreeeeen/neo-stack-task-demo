import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import PersonCard from "../../components/PersonCard";

import { getPersons } from "../../store/actions/person";

import classes from "./personsList.module.scss";

const PersonsList: React.FC = () => {
  const { persons, error, loading } = useTypedSelector(
    (state) => state.persons
  );

  const handleCreatePerson = () => {};

  const { getPersons } = useActions();

  useEffect(() => {
    getPersons();
  }, []);

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
    </div>
  );
};

export default PersonsList;
