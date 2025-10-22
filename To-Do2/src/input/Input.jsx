import "./Iinput.css";
import { useContext, useState } from "react";
import { TasksContext } from "../Context/TasksProvider.jsx";
import StarPorder from "../Animations/StarBorder/StarBorder";

function Input() {
  const { AddTask } = useContext(TasksContext);

  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [taskTime, setTaskTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    })
  );

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
              setTaskText("");
            }
          }}
        />
        <input
          id="date"
          type="date"
          onChange={(e) => setTaskDate(e.target.value)}
          defaultValue={taskDate}
        />
        <input
          id="time"
          type="time"
          onChange={(e) => setTaskTime(e.target.value)}
          defaultValue={taskTime}
        ></input>
        <StarPorder
          as="button"
          className="custom-class"
          color="cyan"
          speed="5s"
          onClick={() => {
            AddTask(taskDate, taskText, taskTime);
            setTaskText("");
          }}
        >
          Add
        </StarPorder>
      </section>
    </>
  );
}

export default Input;
