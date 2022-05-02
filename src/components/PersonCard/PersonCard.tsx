import React from "react";

import { Person } from "../../types/person";

import classes from "./personCard.module.scss";

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const handleEditPersonButton = () => {};

  const handleDeletePersonButton = () => {};

  return (
    <div className={classes.mainPersonBlock}>
      <div className={classes.personInfoBlock}>
        <h2>{person.id}</h2>
        <h2>{person.name}</h2>
        <h2>{person.lastName}</h2>
      </div>
    </div>
  );
};

export default PersonCard;
