import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TasksProvider from "./Context/TasksProvider.jsx";
import DialogProvider from "./Context/DialogProvider.jsx";
import App from "./App.jsx";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DialogProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </DialogProvider>
  </StrictMode>
);
