import * as PersonActions from "./person";
import * as FormActions from "./formAction";
import * as ConfirmActions from "./confirmAction";
import * as ToastActions from "./toastActions";

export default {
  ...FormActions,
  ...PersonActions,
  ...ConfirmActions,
  ...ToastActions,
};
