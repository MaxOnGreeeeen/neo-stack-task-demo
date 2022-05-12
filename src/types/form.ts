import { Person } from "./person";

export interface FormState {
  forms: Form[];
}

export interface Form {
  type: FormTypes;
  active: boolean;
  person?: Person;
  id: number | null;
  name: string;
  lastName: string;
  disabled: boolean;
}

export enum FormTypes {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export enum FormActionType {
  EDIT_PERSON_NAME = "EDIT_PERSON_NAME",
  EDIT_PERSON_LASTNAME = "EDIT_PERSON_LASTNAME",
  SET_ACTIVE = "SET_ACTIVE",
  SET_PERSON_EDIT = "SET_PERSON_EDIT",
  CLEAR_FORM_DATA = "CLEAR_FORM_DATA",
}

export interface EditPersonName {
  type: FormActionType.EDIT_PERSON_NAME;
  payload: { type: FormTypes; name: string };
}

export interface EditPersonLastname {
  type: FormActionType.EDIT_PERSON_LASTNAME;
  payload: { type: FormTypes; lastName: string };
}

export interface SetPersonEdit {
  type: FormActionType.SET_PERSON_EDIT;
  payload: Person;
}

export interface ClearFormData {
  type: FormActionType.CLEAR_FORM_DATA;
}

export interface SetActive {
  type: FormActionType.SET_ACTIVE;
  payload: {
    type: FormTypes;
    active: boolean;
  };
}

export type FormActions =
  | SetActive
  | EditPersonLastname
  | EditPersonName
  | SetPersonEdit
  | ClearFormData;
