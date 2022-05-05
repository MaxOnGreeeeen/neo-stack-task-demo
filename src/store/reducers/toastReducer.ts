import {
  ToastsActions,
  ToastsActionTypes,
  ToastsState,
} from "../../types/toasts";

const initialState: ToastsState = {
  toasts: [],
};

export const toastReducer = (
  state = initialState,
  action: ToastsActions
): ToastsState => {
  switch (action.type) {
    case ToastsActionTypes.CREATE_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case ToastsActionTypes.DELETE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    default:
      return state;
  }
};
