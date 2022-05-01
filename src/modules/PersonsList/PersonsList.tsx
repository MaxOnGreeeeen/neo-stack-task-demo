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

  const { getPersons } = useActions();

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div className={classes.mainBlock}>
      {loading &&
        persons.map((person, number) => {
          return <PersonCard key={number} person={person} />;
        })}
    </div>
  );
};

export default PersonsList;
