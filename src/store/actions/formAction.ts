import { Dispatch } from "redux";

import { FormActions, FormActionType } from "../../types/form";
import { Person } from "../../types/person";
import { setCreateDialogVisible, setEditDialogVisible } from "./confirmAction";

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

export const setModalVisibility = (active: boolean, type: string) => {
  return (dispatch: Dispatch<FormActions>) => {
    switch (type) {
      case "create":
        return dispatch({
          type: FormActionType.SET_MODAL_CREATE_ACTIVE,
          payload: active,
        });

      case "edit":
        return dispatch({
          type: FormActionType.SET_MODAL_EDIT_ACTIVE,
          payload: active,
        });
    }
  };
};

export const editPersonLastname = (lastName: string) => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.EDIT_PERSON_LASTNAME, payload: lastName });
  };
};

export const clearFormData = () => {
  return (dispatch: Dispatch<FormActions>) => {
    dispatch({ type: FormActionType.CLEAR_FORM_DATA });
    setEditDialogVisible(false);
    setCreateDialogVisible(false);
  };
};
