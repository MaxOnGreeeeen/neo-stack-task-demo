import { FormActionType, FormActions, FormState } from "../../types/form";

const initialState: FormState = {
  activeCreate: false,
  activeEdit: false,
  person: undefined,
  id: 0,
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
        id: action.payload.id,
        name: action.payload.name,
        lastName: action.payload.lastName,
        person: action.payload,
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

    case FormActionType.SET_MODAL_EDIT_ACTIVE:
      return {
        ...state,
        activeEdit: action.payload,
      };

    case FormActionType.SET_MODAL_CREATE_ACTIVE:
      return {
        ...state,
        activeCreate: action.payload,
      };

    case FormActionType.CLEAR_FORM_DATA:
      return {
        ...state,
        person: undefined,
        name: "",
        lastName: "",
        id: null,
      };
    default:
      return state;
  }
};
