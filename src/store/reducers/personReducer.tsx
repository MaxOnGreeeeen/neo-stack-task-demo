import {
  PersonAction,
  PersonActionTypes,
  PersonState,
} from "../../types/person";

const initialState: PersonState = {
  persons: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
  pagesQuantity: 10,
  personsTotalQuantity: 100,
};

export const personReducer = (
  state = initialState,
  action: PersonAction
): PersonState => {
  switch (action.type) {
    case PersonActionTypes.GET_PERSONS:
      return {
        ...state,
        loading: true,
        error: "",
        persons: [],
      };

    case PersonActionTypes.GET_PERSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        persons: action.payload.persons,
        personsTotalQuantity: action.payload.personsTotalQuantity,
        pagesQuantity: action.payload.pagesQuantity,
      };

    case PersonActionTypes.GET_PERSONS_ERROR:
      return { ...state, loading: false, error: action.payload, persons: [] };

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

    case PersonActionTypes.SET_PERSONS_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case PersonActionTypes.SET_PERSONS_PAGE_QUANTITY:
      return {
        ...state,
        pagesQuantity: action.payload,
      };

    case PersonActionTypes.SET_TOTAL_PERSONS_QUANTITY:
      return {
        ...state,
        personsTotalQuantity: action.payload,
      };
    default:
      return state;
  }
};
