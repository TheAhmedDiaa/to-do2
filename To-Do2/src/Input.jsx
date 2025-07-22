import "./Iinput.css";
import { useState, useRef } from "react";
import StarPorder from "./Animations/StarBorder/StarBorder";
import AnimatedList from "./Components/AnimatedList/AnimatedList";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

function Input() {
  const containerRef = useRef(null);

  let [tasks, setTasks] = useState([]);

  function AddTask() {
    let newDate = document.getElementById("date").value;
    let newTask = document.getElementById("task").value;
    let newTime = document.getElementById("time").value;
    let todayDate = new Date().toISOString().split("T")[0];
    let id = tasks.length;

    if (
      newTask.trim() == "" ||
      new Date(newDate) < new Date(todayDate) ||
      newTime < new Date().toISOString().split("T")[1].split(".")[0]
    ) {
      open();
      console.log(
        `${newDate}, ${todayDate}, ${newTime}, ${
          new Date().toISOString().split("T")[1].split(".")[0]
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
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Something is wrong
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Check if the date and the time is valid and you added the task
                name please 😊
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                  autoFocus
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      close();
                    }
                  }}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={isTaskOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeTask}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Something is wrong
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your task is already on the far top or the far bottom 😊
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={closeTask}
                  autoFocus
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      closeTask();
                    }
                  }}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
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
          defaultValue={new Date().toISOString().split("T")[1].split(".")[0]}
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
                    color: task.done ? "hsl(0, 0%, 70%)" : "inherit",
                  }}
                >
                  {task.text} in {task.date} at {task.time}
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
