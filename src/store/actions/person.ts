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

      const persons: Person[] = response.data;

      const totalPersonsCount: number = Number(
        response.headers["x-total-count"]
      );

      const pagesAmount: number = Math.ceil(totalPersonsCount / limit);

      dispatch({
        type: PersonActionTypes.GET_PERSONS_SUCCESS,
        payload: {
          persons: persons,
          personsTotalQuantity: totalPersonsCount,
          pagesQuantity: pagesAmount,
        },
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

export const setTotalPersonsAmount = (
  prev: number,
  raise: number,
  limit: number
) => {
  return (dispatch: Dispatch<PersonAction>) => {
    const personsAmount: number = prev + raise;

    const pagesAmount: number = Math.ceil(Number(personsAmount) / limit);

    dispatch({
      type: PersonActionTypes.SET_PERSONS_PAGE_QUANTITY,
      payload: pagesAmount,
    });

    dispatch({
      type: PersonActionTypes.SET_TOTAL_PERSONS_QUANTITY,
      payload: personsAmount,
    });
  };
};

export const editPerson = (person: Person) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/person/${person.id}`,
        person
      );

      const personFromResponse: Person = response.data;

      dispatch({
        type: PersonActionTypes.EDIT_PERSON,
        payload: personFromResponse,
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

export const createPerson = (person: Person) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/person",
        person
      );

      const personFromResponse: Person = response.data;

      dispatch({
        type: PersonActionTypes.CREATE_PERSON,
        payload: personFromResponse,
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

export const deletePerson = (id: number) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/person/${id}`
      );

      dispatch({
        type: PersonActionTypes.DELETE_PERSON,
        payload: id,
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

export const setLoading = (loading: boolean) => {
  return (dispatch: Dispatch<PersonAction>) => {
    dispatch({ type: PersonActionTypes.SET_LOADING, payload: loading });
  };
};
