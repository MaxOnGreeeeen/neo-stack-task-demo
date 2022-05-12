import {
  ConfirmActions,
  ConfirmActionTypes,
  ConfirmFormTypes,
  ConfirmState,
} from "../../types/confirm";

const initialState: ConfirmState = {
  confirmForms: [
    { type: ConfirmFormTypes.CREATE, message: "", active: false },
    { type: ConfirmFormTypes.EDIT, message: "", active: false },
  ],
};

export const confirmReducer = (
  state = initialState,
  action: ConfirmActions
): ConfirmState => {
  switch (action.type) {
    case ConfirmActionTypes.SET_MESSAGE:
      return {
        ...state,
        confirmForms: state.confirmForms.map((confirmForm) => {
          return confirmForm.type === action.payload.type
            ? { ...confirmForm, message: action.payload.message }
            : confirmForm;
        }),
      };

    case ConfirmActionTypes.CONFIRM_ACTION:
      return {
        ...state,
        confirmForms: state.confirmForms.map((confirmForm) => {
          return confirmForm.type === action.payload
            ? { ...confirmForm, message: "", active: false }
            : confirmForm;
        }),
      };

    case ConfirmActionTypes.SET_DIALOG_VISIBLE:
      return {
        ...state,
        confirmForms: state.confirmForms.map((confirmForm) => {
          return confirmForm.type === action.payload.type
            ? { ...confirmForm, active: action.payload.active }
            : confirmForm;
        }),
      };

    case ConfirmActionTypes.DISPROVE_ACTION:
      return {
        ...state,
        confirmForms: state.confirmForms.map((confirmForm) => {
          return confirmForm.type === action.payload
            ? { ...confirmForm, message: "", active: false }
            : confirmForm;
        }),
      };

    default:
      return state;
  }
};
