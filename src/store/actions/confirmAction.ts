import { Dispatch } from "redux";

import { ConfirmActions, ConfirmActionTypes } from "../../types/confirm";

export const setMessage = (message: string) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.SET_MESSAGE, payload: message });
  };
};

export const confirmCreateAction = () => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.CONFIRM_CREATE_ACTION });
  };
};

export const confirmEditAction = () => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.CONFIRM_EDIT_ACTION });
  };
};

export const setEditDialogVisible = (active: boolean) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({
      type: ConfirmActionTypes.SET_EDIT_DIALOG_VISIBLE,
      payload: active,
    });
  };
};

export const setCreateDialogVisible = (active: boolean) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({
      type: ConfirmActionTypes.SET_CREATE_DIALOG_VISIBLE,
      payload: active,
    });
  };
};

export const disproveAction = () => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.DISPROVE_ACTION });
  };
};
