export interface ConfirmState {
  activeCreateDialog: boolean;
  activeEditDialog: boolean;
  message: string;
}

export enum ConfirmActionTypes {
  SET_MESSAGE = "SET_MESSAGE",
  CONFIRM_CREATE_ACTION = "CONFIRM_CREATE_ACTION",
  CONFIRM_EDIT_ACTION = "CONFIRM_EDIT_ACTION",
  DISPROVE_ACTION = "DISPROVE_ACTION",
  SET_CREATE_DIALOG_VISIBLE = "SET_CREATE_DIALOG_VISIBLE",
  SET_EDIT_DIALOG_VISIBLE = "SET_EDIT_DIALOG_VISIBLE",
}

export interface SetMessage {
  type: ConfirmActionTypes.SET_MESSAGE;
  payload: string;
}

export interface SetCreateDialogVisible {
  type: ConfirmActionTypes.SET_CREATE_DIALOG_VISIBLE;
  payload: boolean;
}

export interface SetEditDialogVisible {
  type: ConfirmActionTypes.SET_EDIT_DIALOG_VISIBLE;
  payload: boolean;
}

export interface ConfirmCreateAction {
  type: ConfirmActionTypes.CONFIRM_CREATE_ACTION;
}

export interface ConfirmEditAction {
  type: ConfirmActionTypes.CONFIRM_EDIT_ACTION;
}

export interface DisproveAction {
  type: ConfirmActionTypes.DISPROVE_ACTION;
}

export type ConfirmActions =
  | SetMessage
  | ConfirmCreateAction
  | ConfirmEditAction
  | DisproveAction
  | SetCreateDialogVisible
  | SetEditDialogVisible;
