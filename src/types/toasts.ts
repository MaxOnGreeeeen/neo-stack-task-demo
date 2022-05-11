import { ToastVariants } from "../UI kit/toastNotitifcation/toastNotification";

export interface Toast {
  id: number | null;
  message: string;
  type: ToastVariants;
}

export interface ToastsState {
  toasts: Toast[];
}

export enum ToastsActionTypes {
  CREATE_TOAST = "CREATE_TOAST",
  SHOW_TOASTS = "SHOW_TOAST",
  DELETE_TOAST = "DELETE_TOAST",
}

export interface ShowToasts {
  type: ToastsActionTypes.SHOW_TOASTS;
  payload: boolean;
}

export interface CreateToast {
  type: ToastsActionTypes.CREATE_TOAST;
  payload: Toast;
}

export interface DeleteToast {
  type: ToastsActionTypes.DELETE_TOAST;
  payload: number | null;
}

export type ToastsActions = CreateToast | ShowToasts | DeleteToast;
