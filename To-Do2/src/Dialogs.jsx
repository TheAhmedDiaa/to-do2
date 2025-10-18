import { DialogContext } from "./Context/DialogProvider";
import { useContext } from "react";
import DialogModel from "./dialog/DialogModel.jsx";


export default function Dialogs() {
  const { isOpen, isTaskErrorOpen, Close, CloseTaskError } = useContext(DialogContext);

  return (
    <>
      <DialogModel
        isOpen={isOpen}
        close={Close}
        message="Check if the date and the time is valid and you added the task name please 😊"
      />
      <DialogModel
        isOpen={isTaskErrorOpen}
        close={CloseTaskError}
        message="Your task is already on the far top or the far bottom 😊"
      />
    </>
  );
}
