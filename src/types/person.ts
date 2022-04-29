export interface PersonState {
  persons: any[];
  loading: boolean;
  error: null | string;
}

export enum PersonActionTypes {
  GET_PERSONS = "GET_ALL_PERSONS",
  GET_PERSONS_ERROR = "GET_PERSONS_ERROR",
  GET_PERSONS_SUCCESS = "GET_PERSONS_SUCCESS",
  EDIT_PERSON = "EDIT_PERSON",
}

export interface GetPersons {
  type: PersonActionTypes.GET_PERSONS;
}

export interface GetPersonsError {
  type: PersonActionTypes.GET_PERSONS_ERROR;
  payload: string;
}

export interface GetPersonSuccess {
  type: PersonActionTypes.GET_PERSONS_SUCCESS;
  payload: [];
}

export interface EditPerson {
  type: PersonActionTypes.EDIT_PERSON;
}

export type PersonAction =
  | GetPersons
  | EditPerson
  | GetPersonsError
  | GetPersonSuccess;
