import React from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import c from "./personsList.module.scss";

const PersonsList: React.FC = () => {
  const { persons, error, loading } = useTypedSelector(
    (state) => state.persons
  );

  return <div></div>;
};

export default PersonsList;
