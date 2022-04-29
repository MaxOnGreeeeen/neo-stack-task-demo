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
      return { loading: true, error: "sdfsdf", persons: [] };

    case PersonActionTypes.EDIT_PERSON:
      return { loading: true, error: "sdfsdf", persons: [] };

    case PersonActionTypes.GET_PERSONS_SUCCESS:
      return { loading: true, error: "sdfsdf", persons: [] };

    case PersonActionTypes.GET_PERSONS_ERROR:
      return { loading: true, error: "sdfsdf", persons: [] };

    default:
      return state;
  }
};
