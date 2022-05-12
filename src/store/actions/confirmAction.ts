import { Dispatch } from "redux";

import {
  ConfirmActions,
  ConfirmActionTypes,
  ConfirmFormTypes,
} from "../../types/confirm";

export const setMessage = (message: string, type: ConfirmFormTypes) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({
      type: ConfirmActionTypes.SET_MESSAGE,
      payload: {
        message: message,
        type: type,
      },
    });
  };
};

export const confirmAction = (type: ConfirmFormTypes) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.CONFIRM_ACTION, payload: type });
  };
};

export const setFormVisible = (type: ConfirmFormTypes, active: boolean) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({
      type: ConfirmActionTypes.SET_DIALOG_VISIBLE,
      payload: { type: type, active: active },
    });
  };
};

export const disproveAction = (type: ConfirmFormTypes) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.DISPROVE_ACTION, payload: type });
  };
};
