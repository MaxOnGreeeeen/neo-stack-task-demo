export interface ConfirmState {
  active: boolean;
  message: string;
}

export enum ConfirmActionTypes {
  SET_MESSAGE = "SET_MESSAGE",
  CONFIRM_ACTION = "CONFIRM_ACTION",
  DISPROVE_ACTION = "DISPROVE_ACTION",
}

export interface SetMessage {
  type: ConfirmActionTypes.SET_MESSAGE;
  payload: string;
}

export interface ConfirmAction {
  type: ConfirmActionTypes.CONFIRM_ACTION;
}

export interface DisproveAction {
  type: ConfirmActionTypes.DISPROVE_ACTION;
}

export type ConfirmActions = SetMessage | ConfirmAction | DisproveAction;
