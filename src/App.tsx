import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskListItem from "./components/TaskListItem";

// TODO: Create a new component called `TaskList` in the `components` folder - done!
// TODO: Create a new component called `TaskForm` in the `components` folder - done!
// TODO: Create a new component called `TaskListItem` in the `components` folder - done!

// TODO: A user should be able to see a list of tasks - done!
// TODO: A user should be able to add a new task to the list (with a title)
// TODO: A user should be able to delete a task from the list

// TODO: A user should be able to mark a task as complete
// TODO: A user should be able to distinguish between completed and incomplete tasks

// TODO: A user should be able to count the total number of tasks
// TODO: A user should be able to count the number of completed tasks
// TODO: A user should be able to count the number of incomplete tasks

function App() {
  return (
    <div className="container">
      <h1 className="title">trade to world task list</h1>
      {/* Add components here... */}
      <TaskForm></TaskForm>
      <TaskList></TaskList>
      <TaskListItem></TaskListItem>
    </div>
  );
}

export default App;
