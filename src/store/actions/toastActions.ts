import { Dispatch } from "redux";
import { ToastVariants } from "../../UI kit/toastNotitifcation/toastNotification";
import { ToastsActions, ToastsActionTypes } from "../../types/toasts";

export const createToast = (
  id: number,
  type: ToastVariants,
  message: string
) => {
  return (dispatch: Dispatch<ToastsActions>) => {
    dispatch({
      type: ToastsActionTypes.CREATE_TOAST,
      payload: {
        id: id,
        type: type,
        message: message,
      },
    });
  };
};

export const deleteToast = (id: number) => {
  return (dispatch: Dispatch<ToastsActions>) => {
    dispatch({
      type: ToastsActionTypes.DELETE_TOAST,
      payload: id,
    });
  };
};
