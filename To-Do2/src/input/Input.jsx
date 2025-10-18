import "./Iinput.css";
import { useContext, useState } from "react";
import { TasksContext } from "../Context/TasksProvider.jsx";
import StarPorder from "../Animations/StarBorder/StarBorder";

function Input() {

  const { AddTask} = useContext(TasksContext);

  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  return (
    <>
      <section className="inputs">
        <input
          id="task"
          type="text"
          placeholder="Add a task..."
          autoFocus
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              AddTask(taskDate, taskText, taskTime);
            }
          }}
        />
        <input
          id="date"
          type="date"
          onChange={(e) => setTaskDate(e.target.value)}
          defaultValue={new Date().toISOString().split("T")[0]}
        />
        <input
          id="time"
          type="time"
          onChange={(e) => setTaskTime(e.target.value)}
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
          onClick={() => AddTask(taskDate, taskText, taskTime)}
        >
          Add
        </StarPorder>
      </section>
    </>
  );
}

export default Input;
