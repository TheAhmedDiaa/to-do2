import { createContext, useState, useEffect, useContext } from "react";
import { DialogContext } from "./DialogProvider.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
  let [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || []);
  });
  const { Open, OpenTaskError } = useContext(DialogContext);

  // save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // add a new task
  function AddTask(taskDate, taskText, taskTime) {
    let date = taskDate;
    let text = taskText;
    let time = taskTime;
    let todayDate = new Date().toTimeString().split(" ")[0];
    let id = tasks.length;

    if (text.trim() == "" || new Date(date) < new Date(todayDate)) {
      // dialog context will handle this
      Open();
      console.log(
        `${date}, ${todayDate}, ${time}, ${
          new Date().toTimeString().split(" ")[0]
        }`
      );
      return;
    }

    setTasks((t) => [
      ...t,
      { text: text, date: date, time: time, id: id, done: false },
    ]);
  }

  // complete a task
  function CompleteTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  // remove a task
  function RemoveTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    console.log(tasks);
  }

  // move task up
  function TaskUp(i) {
    let newTasks = [...tasks];
    let thisTask = tasks[i];
    let previousTask = tasks[i - 1];
    if (!previousTask) {
      // dialog context will handle this
      OpenTaskError();
      return;
    }

    newTasks[i] = previousTask;
    newTasks[i - 1] = thisTask;

    setTasks(newTasks);
  }

  // move task down
  function TaskDown(i) {
    let newTasks = [...tasks];
    let thisTask = tasks[i];
    let nextTask = tasks[i + 1];
    if (!nextTask) {
      OpenTaskError();
      return;
    }

    newTasks[i] = nextTask;
    newTasks[i + 1] = thisTask;

    setTasks(newTasks);
  }

  return (
    <TasksContext.Provider
      value={{ tasks, AddTask, CompleteTask, RemoveTask, TaskUp, TaskDown }}
    >
      {children}
    </TasksContext.Provider>
  );
}
