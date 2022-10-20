import {React, useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

const [tasks, setTasks] = useState(TASKS)

const [category, setCatorgery] = useState("All")

function handleDelete(deletedTask) {
  setTasks(tasks.filter((task) => task.text !== deletedTask))
}

function handleAdd(newTask) {
  setTasks([...tasks, newTask]);
}

const visibleTasks = tasks.filter (
  (task) => category === 'All' || task.category === category
)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCatorgery= {category} onSelect={setCatorgery}/>
      <NewTaskForm categories= {CATEGORIES.filter((cat) => cat !== "All")} onTaskFromSubmit= {handleAdd} />
      <TaskList onDelete= {handleDelete} tasks= {visibleTasks} />
    </div>
  );
}

export default App;
