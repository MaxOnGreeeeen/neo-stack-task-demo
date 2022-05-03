import {
  ConfirmActions,
  ConfirmActionTypes,
  ConfirmState,
} from "../../types/confirm";

const initialState: ConfirmState = {
  activeEditDialog: false,
  activeCreateDialog: false,
  message: "",
};

export const confirmReducer = (
  state = initialState,
  action: ConfirmActions
): ConfirmState => {
  switch (action.type) {
    case ConfirmActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case ConfirmActionTypes.CONFIRM_EDIT_ACTION:
      return {
        ...state,
        activeEditDialog: false,
        message: "",
      };
    case ConfirmActionTypes.CONFIRM_CREATE_ACTION:
      return {
        ...state,
        activeCreateDialog: false,
        message: "",
      };

    case ConfirmActionTypes.SET_CREATE_DIALOG_VISIBLE:
      return {
        ...state,
        activeEditDialog: action.payload,
      };

    case ConfirmActionTypes.SET_EDIT_DIALOG_VISIBLE:
      return {
        ...state,
        activeCreateDialog: action.payload,
      };

    case ConfirmActionTypes.DISPROVE_ACTION:
      return {
        ...state,
        activeCreateDialog: false,
        activeEditDialog: false,
        message: "",
      };

    default:
      return state;
  }
};
