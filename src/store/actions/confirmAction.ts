import { Dispatch } from "redux";

import { ConfirmActions, ConfirmActionTypes } from "../../types/confirm";

export const setMessage = (message: string) => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.SET_MESSAGE, payload: message });
  };
};

export const confirmAction = () => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.CONFIRM_ACTION });
  };
};

export const disproveAction = () => {
  return (dispatch: Dispatch<ConfirmActions>) => {
    dispatch({ type: ConfirmActionTypes.DISPROVE_ACTION });
  };
};
