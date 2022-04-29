import { PersonAction, PersonActionTypes } from "../../types/person";
import { Dispatch } from "redux";
import { types } from "sass";
import Error = types.Error;

export const getPersons = () => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      dispatch({ type: PersonActionTypes.GET_PERSONS });
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
          payload: e.toString(),
        });
      }
    }
  };
};
