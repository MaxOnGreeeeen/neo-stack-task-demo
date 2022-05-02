import {
  PersonAction,
  PersonActionTypes,
  PersonState,
} from "../../types/person";

const initialState: PersonState = {
  persons: [],
  loading: false,
  error: null,
};

export const personReducer = (
  state = initialState,
  action: PersonAction
): PersonState => {
  switch (action.type) {
    case PersonActionTypes.GET_PERSONS:
      return { loading: true, error: "", persons: [] };

    case PersonActionTypes.GET_PERSONS_SUCCESS:
      return { loading: true, error: "", persons: action.payload };

    case PersonActionTypes.GET_PERSONS_ERROR:
      return { loading: true, error: action.payload, persons: [] };

    case PersonActionTypes.CREATE_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };

    case PersonActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PersonActionTypes.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.payload),
      };

    case PersonActionTypes.EDIT_PERSON:
      return {
        ...state,
        persons: state.persons.map((person) => {
          if (person.id !== action.payload.id) {
            return person;
          }

          if (person.id === action.payload.id) {
            return action.payload;
          }
        }),
      };
    default:
      return state;
  }
};
