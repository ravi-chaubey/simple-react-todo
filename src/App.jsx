import { useState } from "react";
import Form from "./components/todoForm/Form"
import List from "./components/todoList/List"
import './index.css'


function App() {

  const [list, setList] = useState([]);
  const [editValue, setEditValue] = useState({});
  const [isEditing, setIsEditing] = useState(false); // New state to track editing mode

  function taskAddHandler(task) {
    const newTask = [...list, task];
    setList(newTask);
  }

  function taskEditHandler(id) {
    const index = list.findIndex((task) => task.id === id);
    if (index !== -1) {
      const editTask = { ...list[index], index }; // Create a copy and add the index
      setEditValue(editTask);
      setIsEditing(true); // Set editing mode to true
    }
  }

  function taskUpdateHandler(updatedTask) {
    const updatedList = [...list];
    updatedList[updatedTask.index] = updatedTask; // Update task at the specified index
    setList(updatedList);
    setEditValue({}); // Clear the editValue state
    setIsEditing(false); // Set editing mode to false
  }

  function taskDeleteHandler(id) {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
    setEditValue({}); // Clear the editValue state
    setIsEditing(false); // Set editing mode to false
  }

  return (
    <main>
      <h1>Simple List App</h1>
      <List
        onDelete={taskDeleteHandler}
        onEdit={taskEditHandler}
        listItems={list}
      />
      <Form
        onAdd={taskAddHandler}
        onUpdate={taskUpdateHandler}
        formValues={editValue}
        isEditing={isEditing}
      />
    </main>
  );
}

export default App;
