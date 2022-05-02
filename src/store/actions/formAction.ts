import { Dispatch } from "redux";

import { FormActions, FormActionType } from "../../types/form";

export const editPerson = () => {};

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

export const editPersonLastname = () => {};
