import {
  FormActions,
  FormActionType,
  FormState,
  FormTypes,
} from "../../types/form";

const initialState: FormState = {
  forms: [
    {
      type: FormTypes.CREATE,
      name: "",
      id: null,
      lastName: "",
      active: false,
      person: undefined,
      disabled: false,
    },
    {
      type: FormTypes.EDIT,
      name: "",
      id: 0,
      lastName: "",
      active: false,
      person: undefined,
      disabled: false,
    },
  ],
};

export const formReducer = (
  state = initialState,
  action: FormActions
): FormState => {
  switch (action.type) {
    case FormActionType.SET_PERSON_EDIT:
      return {
        ...state,
        forms: state.forms.map((form) => {
          return form.type === FormTypes.EDIT
            ? {
                ...form,
                person: action.payload,
                id: action.payload.id,
                name: action.payload.name,
                lastName: action.payload.lastName,
              }
            : form;
        }),
      };

    case FormActionType.EDIT_PERSON_NAME:
      return {
        ...state,
        forms: state.forms.map((form) => {
          return form.type === action.payload.type
            ? { ...form, name: action.payload.name }
            : form;
        }),
      };

    case FormActionType.EDIT_PERSON_LASTNAME:
      return {
        ...state,
        forms: state.forms.map((form) => {
          return form.type === action.payload.type
            ? { ...form, lastName: action.payload.lastName }
            : form;
        }),
      };

    case FormActionType.SET_ACTIVE:
      return {
        ...state,
        forms: state.forms.map((form) => {
          return form.type === action.payload.type
            ? { ...form, active: action.payload.active }
            : form;
        }),
      };

    case FormActionType.CLEAR_FORM_DATA:
      return {
        ...state,
        forms: state.forms.map((form) => {
          return {
            ...form,
            person: undefined,
            id: null,
            name: "",
            lastName: "",
            active: false,
            disabled: false,
          };
        }),
      };
    default:
      return state;
  }
};
