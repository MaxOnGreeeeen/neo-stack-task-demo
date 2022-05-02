import { Dispatch } from "redux";

import axios from "axios";

import { Person, PersonAction, PersonActionTypes } from "../../types/person";

export const getPersons = (page: number, limit: number) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      dispatch({ type: PersonActionTypes.GET_PERSONS });

      const response = await axios.get("http://localhost:5000/api/v1/persons", {
        params: {
          _limit: limit,
          _page: page,
        },
      });

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

export const setPersonsPage = (page: number): PersonAction => {
  return { type: PersonActionTypes.SET_PERSONS_PAGE, payload: page };
};

export const editPerson = (person: Person) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      setLoading(true);

      const response = await axios.put(
        `http://localhost:5000/api/v1/person/:${person.id}`,
        person
      );

      const personFromResponse: Person = response.data;

      dispatch({
        type: PersonActionTypes.EDIT_PERSON,
        payload: personFromResponse,
      });

      setLoading(false);
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

export const createPerson = (person: Person) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/v1/person",
        person
      );

      const personFromResponse: Person = response.data;
      dispatch({
        type: PersonActionTypes.CREATE_PERSON,
        payload: personFromResponse,
      });
      setLoading(false);
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

export const deletePerson = (id: number) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      setLoading(true);

      const response = await axios.delete(
        `http://localhost:5000/api/v1/person/:${id}`
      );

      dispatch({
        type: PersonActionTypes.DELETE_PERSON,
        payload: id,
      });
      setLoading(false);
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

export const setLoading = (loading: boolean) => {
  return (dispatch: Dispatch<PersonAction>) => {
    dispatch({ type: PersonActionTypes.SET_LOADING, payload: loading });
  };
};
