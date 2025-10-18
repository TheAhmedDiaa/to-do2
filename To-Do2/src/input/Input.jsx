import "./Iinput.css";
import { useRef, useContext, useState } from "react";
import { TasksContext } from "../Context/TasksProvider.jsx";
import StarPorder from "../Animations/StarBorder/StarBorder";
import AnimatedList from "../Components/AnimatedList/AnimatedList";

function Input() {
  const containerRef = useRef(null);

  const { tasks, AddTask, RemoveTask, TaskUp, TaskDown, CompleteTask } = useContext(TasksContext);

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
                <button onClick={() => RemoveTask(task.id)}>Remove</button>
                <button onClick={() => TaskUp(i)}>👆</button>
                <button onClick={() => TaskDown(i)}>👇</button>
                <button onClick={() => CompleteTask(task.id)}>Done</button>
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
