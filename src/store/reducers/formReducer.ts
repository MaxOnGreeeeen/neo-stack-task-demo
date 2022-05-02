import { FormActionType, FormActions, FormState } from "../../types/form";
import { Person } from "../../types/person";

const initialState: FormState = {
  active: false,
  person: undefined,
  name: "",
  lastName: "",
  disabled: true,
};

export const formReducer = (
  state = initialState,
  action: FormActions
): FormState => {
  switch (action.type) {
    case FormActionType.EDIT_PERSON_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case FormActionType.EDIT_PERSON_LASTNAME:
      return {
        ...state,
        name: action.payload,
      };

    case FormActionType.SET_MODAL_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
