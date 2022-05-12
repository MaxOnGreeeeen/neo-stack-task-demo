import { Dispatch } from "redux";

import { FormActions, FormActionType, FormTypes } from "../../types/form";
import { Person } from "../../types/person";

export const setPersonEdit = (person: Person) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.SET_PERSON_EDIT, payload: person });
  };
};

export const editPersonName = (type: FormTypes, name: string) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({
      type: FormActionType.EDIT_PERSON_NAME,
      payload: { type: type, name: name },
    });
  };
};

export const editPersonLastname = (type: FormTypes, lastName: string) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({
      type: FormActionType.EDIT_PERSON_LASTNAME,
      payload: { type: type, lastName: lastName },
    });
  };
};

export const setModalVisibility = (active: boolean, type: FormTypes) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({
      type: FormActionType.SET_ACTIVE,
      payload: { type: type, active: active },
    });
  };
};

export const clearFormData = () => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.CLEAR_FORM_DATA });
  };
};
