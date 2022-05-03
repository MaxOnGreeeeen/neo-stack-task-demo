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
    case FormActionType.SET_PERSON_EDIT:
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
      };
    case FormActionType.EDIT_PERSON_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case FormActionType.EDIT_PERSON_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
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
