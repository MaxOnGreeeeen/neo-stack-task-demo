import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../store/actions/person";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActions, dispatch);
};
