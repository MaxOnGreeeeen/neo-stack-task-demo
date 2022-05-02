import React, { MouseEventHandler } from "react";

import { Person } from "../../types/person";

import Button, { ButtonVariant } from "../../UI kit/button/button";

import deleteIcon from "../../assets/static/icons/deleteIcon.svg";
import editIcon from "../../assets/static/icons/editIcon.svg";

import classes from "./personCard.module.scss";

interface PersonCardProps {
  person: Person;
  deleteHandler: (person: Person) => void;
  editHandler: (person: Person) => void;
}

const PersonCard: React.FC<PersonCardProps> = ({
  person,
  deleteHandler,
  editHandler,
}) => {
  const handleDeletePerson = (e: React.MouseEvent) => {
    return deleteHandler(person);
  };

  const handleEditPerson = (e: React.MouseEvent) => {
    return editHandler(person);
  };

  return (
    <div className={classes.mainPersonBlock}>
      <div className={classes.personInfoBlock}>
        <h2>{person.id}</h2>
        <h2>{person.name}</h2>
        <h2>{person.lastName}</h2>
      </div>
      <div className={classes.manageBlock}>
        <Button onClick={handleEditPerson} variant={ButtonVariant.default}>
          {<img src={editIcon} />}
        </Button>
        <Button onClick={handleDeletePerson} variant={ButtonVariant.default}>
          {<img src={deleteIcon} />}
        </Button>
      </div>
    </div>
  );
};

export default PersonCard;
