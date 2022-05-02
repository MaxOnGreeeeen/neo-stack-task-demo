import { combineReducers } from "redux";
import { personReducer } from "./personReducer";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
  persons: personReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
