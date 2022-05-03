import {
  ConfirmActions,
  ConfirmActionTypes,
  ConfirmState,
} from "../../types/confirm";

const initialState: ConfirmState = {
  active: false,
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
        active: true,
      };

    case ConfirmActionTypes.CONFIRM_ACTION:
      return {
        ...state,
        active: false,
        message: "",
      };

    case ConfirmActionTypes.DISPROVE_ACTION:
      return {
        ...state,
        active: false,
        message: "",
      };

    default:
      return state;
  }
};
