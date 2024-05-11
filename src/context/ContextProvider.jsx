import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const TasksContext = createContext();
function ContextProvider({ children }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasksList, setTasksList] = useLocalStorageState([], "MyTasks");
  const [errorTask, setErrorTask] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [sortby, setSortby] = useState("");

  function handleTask(value) {
    setTask(value);
  }

  function handleDate(value) {
    setDate(value);
  }

  function reset() {
    setTask("");
    setDate("");
    setErrorTask("");
    setErrorDate("");
  }
  function onSubmitTask(e) {
    e.preventDefault();
    if (!task && date) {
      setErrorTask("This field is required");
      setErrorDate("");
      return;
    }
    if (!date && task) {
      setErrorDate("this field is required");
      setErrorTask("");
      return;
    }
    if (!date && !task) {
      setErrorTask("This field is required");
      setErrorDate("this field is required");
      return;
    }
    const newTask = {
      task,
      date,
      id: new Date().getTime(),
      checked: false,
    };
    setTasksList((tasks) => [...tasks, newTask]);
    handleDate("");
    handleTask("");
    setErrorDate("");
    setErrorTask("");
  }
  const handleChecked = (taskId) => {
    setTasksList((prevTasksList) =>
      prevTasksList.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };
  function handleDeleteTask(id) {
    setTasksList((prevTasksList) =>
      prevTasksList.filter((task) => task.id !== id)
    );
  }
  return (
    <TasksContext.Provider
      value={{
        onSubmitTask,
        handleDate,
        handleTask,
        tasksList,
        task,
        date,
        setTasksList,
        errorTask,
        setErrorTask,
        errorDate,
        setErrorDate,
        reset,
        handleChecked,
        handleDeleteTask,
        sortby,
        setSortby,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
function useTasks() {
  const Context = useContext(TasksContext);
  return Context;
}
export { useTasks, ContextProvider };
