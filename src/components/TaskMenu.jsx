import { useTasks } from "../context/ContextProvider";
import { formatDate } from "../utils/helpers";
import NoTasks from "./NoTasks";
import SelectSorting from "./SelectSorting";
import TaskList from "./TaskList";

function TaskMenu() {
  const { sortby, tasksList } = useTasks();

  if (tasksList.length === 0) return <NoTasks />;
  let sortedTasks;
  switch (sortby) {
    case "asc":
      sortedTasks = tasksList.sort((a, b) => a.task.localeCompare(b.task));
      break;
    case "desc":
      sortedTasks = tasksList.sort((a, b) => b.task.localeCompare(a.task));
      break;
    case "checked":
      sortedTasks = tasksList.sort((a, b) => a.checked - b.checked);
      break;
    case "sooner":
      sortedTasks = tasksList.sort((a, b) => a.date.localeCompare(b.date));
      break;
    default:
      sortedTasks = tasksList;
      break;
  }
  return (
    <>
      <SelectSorting />
      <ul className="divide-y divide-yellow-300">
        {sortedTasks.map((task) => (
          <TaskList Task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
}

export default TaskMenu;
