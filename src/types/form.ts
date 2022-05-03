import { Person } from "./person";

export interface FormState {
  active: boolean;
  person?: Person;
  id: number | null;
  name: string;
  lastName: string;
  disabled: boolean;
}

export enum FormActionType {
  CREATE_PERSON = "CREATE_PERSON",
  CREATE_PERSON_CONFIRM = "CREATE_PERSON_CONFIRM",
  EDIT_PERSON_NAME = "EDIT_PERSON_NAME",
  EDIT_PERSON_LASTNAME = "EDIT_PERSON_LASTNAME",
  EDIT_PERSON_CONFIRM = "EDIT_PERSON_CONFIRM",
  SET_NAME_INPUT_ERROR = "SET_NAME_INPUT_ERROR",
  SET_LASTNAME_INPUT_ERROR = "SET_LASTNAME_INPUT_ERROR",
  SET_MODAL_ACTIVE = "SET_MODAL_ACTIVE",
  SET_PERSON_EDIT = "SET_PERSON_EDIT",
}

export interface CreatePerson {
  type: FormActionType.CREATE_PERSON;
}

export interface CreatePersonConfirm {
  type: FormActionType.CREATE_PERSON_CONFIRM;
}

export interface EditPersonName {
  type: FormActionType.EDIT_PERSON_NAME;
  payload: string;
}

export interface EditPersonLastname {
  type: FormActionType.EDIT_PERSON_LASTNAME;
  payload: string;
}

export interface EditPersonConfirm {
  type: FormActionType.EDIT_PERSON_CONFIRM;
}

export interface SetNameInputError {
  type: FormActionType.SET_NAME_INPUT_ERROR;
}

export interface SetLastnameInputError {
  type: FormActionType.SET_LASTNAME_INPUT_ERROR;
}

export interface ModalManageVisibility {
  type: FormActionType.SET_MODAL_ACTIVE;
  payload: boolean;
}

export interface SetPersonEdit {
  type: FormActionType.SET_PERSON_EDIT;
  payload: Person;
}

export type FormActions =
  | ModalManageVisibility
  | CreatePersonConfirm
  | EditPersonLastname
  | CreatePerson
  | EditPersonName
  | EditPersonConfirm
  | SetLastnameInputError
  | SetNameInputError
  | SetPersonEdit;
