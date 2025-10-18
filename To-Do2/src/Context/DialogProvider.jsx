import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DialogContext = createContext(null);

export default function DialogProvider({ children }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isTaskErrorOpen, setIsTaskErrorOpen] = useState(false);

  // open general error dialog while adding a task
  function Open() {
    setIsOpen(true);
  }

  // close general error dialog while adding a task
  function Close() {
    setIsOpen(false);
  }

  // open task move error
  function OpenTaskError() {
    setIsTaskErrorOpen(true);
  }

  // close task move error
  function CloseTaskError() {
    setIsTaskErrorOpen(false);
  }
  return (
    <DialogContext.Provider
      value={{
        isOpen,
        isTaskErrorOpen,
        Open,
        Close,
        OpenTaskError,
        CloseTaskError,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
