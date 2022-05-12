import { Dispatch } from "redux";

import { Person, PersonAction, PersonActionTypes } from "../../types/person";

import axios from "axios";

export const getPersons = (page: number, limit: number) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    dispatch({ type: PersonActionTypes.CLEAR_MESSAGE });
    dispatch({ type: PersonActionTypes.CLEAR_ERRORS });

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
      dispatch({
        type: PersonActionTypes.GET_PERSONS_ERROR,
        payload: "Ошибка при загрузке пользователей!",
      });
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
    dispatch({ type: PersonActionTypes.CLEAR_MESSAGE });
    dispatch({ type: PersonActionTypes.CLEAR_ERRORS });

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

      dispatch({
        type: PersonActionTypes.SET_TOAST_MESSAGE,
        payload: "Пользователь успешно отредактирован!",
      });
    } catch (e: unknown) {
      dispatch({
        type: PersonActionTypes.GET_PERSONS_ERROR,
        payload: "Ошибка при попытке редактирования!",
      });
    }
  };
};

export const createPerson = (person: Person) => {
  return async (dispatch: Dispatch<PersonAction>) => {
    dispatch({ type: PersonActionTypes.CLEAR_MESSAGE });
    dispatch({ type: PersonActionTypes.CLEAR_ERRORS });

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

      dispatch({
        type: PersonActionTypes.SET_TOAST_MESSAGE,
        payload: "Пользователь успешно создан!",
      });
    } catch (e: unknown) {
      dispatch({
        type: PersonActionTypes.GET_PERSONS_ERROR,
        payload: "Ошибка при создании пользователя!",
      });
    }
  };
};

export const deletePerson = (id: number) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: PersonActionTypes.CLEAR_MESSAGE });
    dispatch({ type: PersonActionTypes.CLEAR_ERRORS });

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/person/${id}`
      );

      dispatch({
        type: PersonActionTypes.DELETE_PERSON,
        payload: id,
      });

      dispatch({
        type: PersonActionTypes.SET_TOAST_MESSAGE,
        payload: "Пользователь успешно удален!",
      });
    } catch (e: unknown) {
      dispatch({
        type: PersonActionTypes.GET_PERSONS_ERROR,
        payload: "Ошибка при удалении пользователя!",
      });
    }
  };
};
