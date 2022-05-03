import * as PersonActions from "./person";
import * as FormActions from "./formAction";
import * as ConfirmActions from "./confirmAction";

export default {
  ...FormActions,
  ...PersonActions,
  ...ConfirmActions,
};
