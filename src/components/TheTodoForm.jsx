import Button from "../ui/Button";
import { useTasks } from "../context/ContextProvider";

function TheTodoForm() {
  const {
    handleDate,
    handleTask,
    onSubmitTask,
    task,
    date,
    errorTask,
    errorDate,
    reset,
  } = useTasks();

  return (
    <form className="flex flex-col gap-5 mt-3 mx-auto space-y-3 capitalize">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
        <div className="flex flex-col w-full">
          <input
            className="w-full p-2 rounded-md outline-none ring-1 ring-yellow-600 text-yellow-900 mb-3 md:mb-0"
            type="text"
            id="todo"
            value={task}
            name="todo"
            onChange={(e) => handleTask(e.target.value)}
            placeholder="Enter Task ..."
          />
          {errorTask && (
            <p className="text-red-500 font-bold text-xs mb-2">{errorTask}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            className="w-full p-2 rounded-md outline-none ring-1 ring-yellow-600 text-yellow-900 mb-3 md:mb-0"
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => handleDate(e.target.value)}
          />
          {errorDate && (
            <p className="text-red-500 font-bold text-xs">{errorDate}</p>
          )}
        </div>
      </div>
      <div className="flex justify-start w-full mt-3">
        {" "}
        {/* Adjusted margin top */}
        <Button
          onClick={(e) => onSubmitTask(e)}
          type="outlinePrimary"
          additionclass="mr-2 capitalize "
        >
          add to list
        </Button>
        <Button
          onClick={reset}
          functionality="reset"
          additionclass="capitalize"
          type="outlineDanger"
        >
          reset
        </Button>
      </div>
    </form>
  );
}

export default TheTodoForm;
