import "./Iinput.css";
import { useState, useRef } from "react";
import StarPorder from "../Animations/StarBorder/StarBorder";
import AnimatedList from "../Components/AnimatedList/AnimatedList";
import DialogModel from "../dialog/DialogModel";

function Input() {
  const containerRef = useRef(null);

  let [tasks, setTasks] = useState([]);

  function AddTask() {
    let newDate = document.getElementById("date").value;
    let newTask = document.getElementById("task").value;
    let newTime = document.getElementById("time").value;
    let todayDate = new Date().toTimeString().split(" ")[0];
    let id = tasks.length;

    if (newTask.trim() == "" || new Date(newDate) < new Date(todayDate)) {
      open();
      console.log(
        `${newDate}, ${todayDate}, ${newTime}, ${
          new Date().toTimeString().split(" ")[0]
        }`
      );
      return;
    }

    document.getElementById("task").value = "";

    setTasks((t) => [
      ...t,
      { text: newTask, date: newDate, time: newTime, id: id, done: false },
    ]);
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
    console.log(tasks);
  }

  function taskUp(index) {
    let newTasks = [...tasks];
    let thisTask = tasks[index];
    let previousTask = tasks[index - 1];
    if (!previousTask) {
      openTask();
      return;
    }

    newTasks[index] = previousTask;
    newTasks[index - 1] = thisTask;

    setTasks(newTasks);
  }

  function taskDown(index) {
    let newTasks = [...tasks];
    let thisTask = tasks[index];
    let nextTask = tasks[index + 1];
    if (!nextTask) {
      openTask();
      return;
    }

    newTasks[index] = nextTask;
    newTasks[index + 1] = thisTask;

    setTasks(newTasks);
  }

  function taskDone(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  let [isOpen, setIsOpen] = useState(false);
  let [isTaskOpen, setIsTaskOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function openTask() {
    setIsTaskOpen(true);
  }

  function closeTask() {
    setIsTaskOpen(false);
  }

  return (
    <>
      <DialogModel
        isOpen={isOpen}
        close={close}
        message="Check if the date and the time is valid and you added the task name please 😊"
      />
      <DialogModel
        isOpen={isTaskOpen}
        close={closeTask}
        message="Your task is already on the far top or the far bottom 😊"
      />
      <div className="inputs">
        <input
          id="task"
          type="text"
          placeholder="Add a task..."
          autoFocus
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              AddTask();
            }
          }}
        />
        <input
          id="date"
          type="date"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <input
          id="time"
          type="time"
          defaultValue={new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}
        ></input>
        <StarPorder
          as="button"
          className="custom-class"
          color="cyan"
          speed="5s"
          onClick={AddTask}
        >
          Add
        </StarPorder>
      </div>
      <div className="tasks">
        <ol>
          <AnimatedList
            items={tasks.map((task, i) => (
              <li key={task.id}>
                <div
                  id={"task-" + task.id}
                  className="task"
                  ref={containerRef}
                  style={{
                    position: "relative",
                    textDecoration: task.done ? "line-through" : "none",
                    color: task.done ? "hsl(0, 0%, 50%)" : "hsl(0, 0%, 90%)",
                  }}
                >
                  {task.text}
                </div>
                <div id="Tdate">
                  <p>{task.date}</p>
                  <p>{task.time}</p>
                </div>
                <button onClick={() => removeTask(i)}>Remove</button>
                <button onClick={() => taskUp(i)}>👆</button>
                <button onClick={() => taskDown(i)}>👇</button>
                <button onClick={() => taskDone(task.id)}>Done</button>
              </li>
            ))}
            showGradients={false}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </ol>
      </div>
    </>
  );
}

export default Input;
