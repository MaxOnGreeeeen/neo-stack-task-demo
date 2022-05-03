import { combineReducers } from "redux";
import { personReducer } from "./personReducer";
import { formReducer } from "./formReducer";
import { confirmReducer } from "./confirmReducer";

export const rootReducer = combineReducers({
  persons: personReducer,
  form: formReducer,
  confirm: confirmReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
