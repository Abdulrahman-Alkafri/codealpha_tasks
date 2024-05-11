import AppContiner from "./components/AppContiner";
import TaskMenu from "./components/TaskMenu";
import TheTodoForm from "./components/TheTodoForm";
import Title from "./components/Title";
import { ContextProvider } from "./context/ContextProvider";
function App() {
  return (
    <div className="w-full relative space-y-1 h-screen bg-gradient-to-r from-yellow-300 via-pink-300 to-pink-400">
      <AppContiner>
        <Title>to-do list 📝</Title>
        <ContextProvider>
          <TheTodoForm />
          <TaskMenu />
        </ContextProvider>
      </AppContiner>
    </div>
  );
}

export default App;
