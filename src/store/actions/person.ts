import { Dispatch } from "redux";

import axios from "axios";

import { Person, PersonAction, PersonActionTypes } from "../../types/person";

export const getPersons = () => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      dispatch({ type: PersonActionTypes.GET_PERSONS });

      const response = await axios.get("http://localhost:5000/api/v1/persons");

      const users: Person[] = response.data;

      dispatch({
        type: PersonActionTypes.GET_PERSONS_SUCCESS,
        payload: users,
      });
    } catch (e: unknown) {
      if (typeof e === "string") {
        dispatch({
          type: PersonActionTypes.GET_PERSONS_ERROR,
          payload: e,
        });
      }

      if (e instanceof Error) {
        dispatch({
          type: PersonActionTypes.GET_PERSONS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
