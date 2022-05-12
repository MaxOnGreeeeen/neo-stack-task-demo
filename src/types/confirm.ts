export interface ConfirmState {
  confirmForms: ConfirmForm[];
}

export interface ConfirmForm {
  type: ConfirmFormTypes;
  active: boolean;
  message: string;
}

export enum ConfirmFormTypes {
  EDIT = "EDIT",
  CREATE = "CREATE",
  DELETE = "DELETE",
}

export enum ConfirmActionTypes {
  SET_MESSAGE = "SET_MESSAGE",
  CONFIRM_ACTION = "CONFIRM_ACTION",
  DISPROVE_ACTION = "DISPROVE_ACTION",
  SET_DIALOG_VISIBLE = "SET_DIALOG_VISIBLE",
}

export interface SetMessage {
  type: ConfirmActionTypes.SET_MESSAGE;
  payload: { type: ConfirmFormTypes; message: string };
}

export interface SetDialogVisible {
  type: ConfirmActionTypes.SET_DIALOG_VISIBLE;
  payload: { type: ConfirmFormTypes; active: boolean };
}

export interface ConfirmAction {
  type: ConfirmActionTypes.CONFIRM_ACTION;
  payload: ConfirmFormTypes;
}

export interface DisproveAction {
  type: ConfirmActionTypes.DISPROVE_ACTION;
  payload: ConfirmFormTypes;
}

export type ConfirmActions =
  | SetMessage
  | DisproveAction
  | SetDialogVisible
  | ConfirmAction;
