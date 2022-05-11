import { Toast, ToastsActions, ToastsActionTypes } from "../../types/toasts";
import { Dispatch } from "react";

export const createToast = (toast: Toast) => {
  return (dispatch: Dispatch<ToastsActions>) => {
    dispatch({
      type: ToastsActionTypes.CREATE_TOAST,
      payload: toast,
    });

    setTimeout(() => {
      dispatch({
        type: ToastsActionTypes.DELETE_TOAST,
        payload: toast.id,
      });
    }, 5000);
  };
};

export const deleteToast = (id: number | null) => {
  return (dispatch: Dispatch<ToastsActions>) => {
    dispatch({
      type: ToastsActionTypes.DELETE_TOAST,
      payload: id,
    });
  };
};
