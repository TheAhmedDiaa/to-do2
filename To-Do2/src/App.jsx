import "./App.css";
import Header from "./Header.jsx";
import Input from "./input/Input.jsx";
import Dialogs from "./Dialogs.jsx";
import TasksList from "./TasksList.jsx";

function App() {
  return (
    <>
      <Header />
      <Dialogs />
      <Input />
      <TasksList />
    </>
  );
}

export default App;
