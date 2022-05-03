import { Person } from "./person";

export interface FormState {
  activeEdit: boolean;
  activeCreate: boolean;
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
  SET_MODAL_EDIT_ACTIVE = "SET_MODAL_EDIT_ACTIVE",
  SET_MODAL_CREATE_ACTIVE = "SET_MODAL_CREATE_ACTIVE",
  SET_PERSON_EDIT = "SET_PERSON_EDIT",
  CLEAR_FORM_DATA = "CLEAR_FORM_DATA",
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

export interface ModalManageVisibilityEdit {
  type: FormActionType.SET_MODAL_EDIT_ACTIVE;
  payload: boolean;
}

export interface ModalManageVisibilityCreate {
  type: FormActionType.SET_MODAL_CREATE_ACTIVE;
  payload: boolean;
}

export interface SetPersonEdit {
  type: FormActionType.SET_PERSON_EDIT;
  payload: Person;
}

export interface ClearFormData {
  type: FormActionType.CLEAR_FORM_DATA;
}

export type FormActions =
  | ModalManageVisibilityCreate
  | ModalManageVisibilityEdit
  | CreatePersonConfirm
  | EditPersonLastname
  | CreatePerson
  | EditPersonName
  | EditPersonConfirm
  | SetLastnameInputError
  | SetNameInputError
  | SetPersonEdit
  | ClearFormData;
