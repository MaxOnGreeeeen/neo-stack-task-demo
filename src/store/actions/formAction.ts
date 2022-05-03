import { Dispatch } from "redux";

import { FormActions, FormActionType } from "../../types/form";
import { Person } from "../../types/person";


export const setPersonEdit = (person: Person) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.SET_PERSON_EDIT, payload: person });
  };
};

export const editPersonName = (name: string) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.EDIT_PERSON_NAME, payload: name });
  };
};

export const setModalVisibility = (active: boolean) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.SET_MODAL_ACTIVE, payload: active });
  };
};

export const editPersonLastname = (lastName: string) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.EDIT_PERSON_LASTNAME, payload: lastName });
  };
};
