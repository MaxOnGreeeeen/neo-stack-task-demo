export interface PersonState {
  persons: Person[] | any[];
  loading: boolean;
  error?: string;
  page: number;
  limit: number;
  pagesQuantity: number;
  personsTotalQuantity: number;
}
export interface Person {
  id: number | null;
  name: string;
  lastName: string;
}
export enum PersonActionTypes {
  GET_PERSONS = "GET_ALL_PERSONS",
  GET_PERSONS_ERROR = "GET_PERSONS_ERROR",
  GET_PERSONS_SUCCESS = "GET_PERSONS_SUCCESS",
  EDIT_PERSON = "EDIT_PERSON",
  CREATE_PERSON = "CREATE_PERSON",
  DELETE_PERSON = "DELETE_PERSON",
  SET_LOADING = "SET_LOADING",
  SET_PERSONS_PAGE = "SET_PERSONS_PAGE",
  SET_PERSONS_PAGE_QUANTITY = "SET_PERSONS_PAGE_QUANTITY",
  SET_TOTAL_PERSONS_QUANTITY = "SET_TOTAL_PERSONS_QUANTITY",
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
  payload: {
    persons: Person[];
    personsTotalQuantity: number;
    pagesQuantity: number;
  };
}

export interface EditPerson {
  type: PersonActionTypes.EDIT_PERSON;
  payload: Person;
}

export interface CreatePerson {
  type: PersonActionTypes.CREATE_PERSON;
  payload: Person;
}

export interface DeletePerson {
  type: PersonActionTypes.DELETE_PERSON;
  payload: number;
}

export interface SetLoading {
  type: PersonActionTypes.SET_LOADING;
  payload: boolean;
}

export interface SetPersonsPage {
  type: PersonActionTypes.SET_PERSONS_PAGE;
  payload: number;
}

export interface SetPageQuantity {
  type: PersonActionTypes.SET_PERSONS_PAGE_QUANTITY;
  payload: number;
}

export interface SetPersonsTotalQuantity {
  type: PersonActionTypes.SET_TOTAL_PERSONS_QUANTITY;
  payload: number;
}
export type PersonAction =
  | GetPersons
  | EditPerson
  | GetPersonsError
  | GetPersonSuccess
  | CreatePerson
  | DeletePerson
  | SetLoading
  | SetPersonsPage
  | SetPageQuantity
  | SetPersonsTotalQuantity;
