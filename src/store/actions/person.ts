import { Dispatch } from "redux";

import axios from "axios";

import { PersonAction, PersonActionTypes } from "../../types/person";

export const getPersons = () => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      dispatch({ type: PersonActionTypes.GET_PERSONS });

      const response = await axios.get("http://localhost:5000/api/v1/persons");

      dispatch({
        type: PersonActionTypes.GET_PERSONS_SUCCESS,
        payload: response.data,
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
