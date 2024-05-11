import { useTasks } from "../context/ContextProvider";
import { formatDate } from "../utils/helpers";

function TaskList({ Task }) {
  const { handleChecked, handleDeleteTask } = useTasks();
  const { id, task, date, checked } = Task;
  return (
    <li
      className="p-2 m-2 flex justify-between items-center hover:scale-105 duration-300"
      key={task.id}
    >
      <div className="flex justify-start items space-x-2">
        <input
          onChange={() => handleChecked(id)}
          checked={checked}
          type="checkbox"
          className="accent-yellow-500"
        />
        <div
          className={`flex flex-col gap-1 text-yellow-700 ${
            checked ? "line-through" : ""
          }`}
        >
          <p className="text-yellow-900 font-bold text-xl">{task}</p>
          <p className="text-yellow-600 font-thin">{formatDate(date)}</p>
        </div>
      </div>
      <div
        className="text-3xl text-yellow-800 cursor-pointer"
        onClick={() => handleDeleteTask(id)}
      >
        &times;
      </div>
    </li>
  );
}

export default TaskList;
