import { combineReducers } from "redux";
import { personReducer } from "./personReducer";
import { formReducer } from "./formReducer";
import { confirmReducer } from "./confirmReducer";
import { toastReducer } from "./toastReducer";

export const rootReducer = combineReducers({
  persons: personReducer,
  form: formReducer,
  confirm: confirmReducer,
  toasts: toastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
