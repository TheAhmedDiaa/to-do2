import AnimatedList from "./Components/AnimatedList/AnimatedList";
import { useContext, useRef, useMemo } from "react";
import { TasksContext } from "./Context/TasksProvider.jsx";

export default function TasksList() {
  const { tasks, RemoveTask, TaskUp, TaskDown, CompleteTask } = useContext(TasksContext);
  const containerRef = useRef(null);

  // using useMemo to reduce unnecessary re-rendering
  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div className="tasks">
      <ol>
        <AnimatedList
          items={memoizedTasks.map((task, i) => (
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
  );
}
