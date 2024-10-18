import { useState } from 'react';
import TaskForm from './components/TaskForm'; 
import './App.css';


function App() {
  const initialData = [
    {
      id: 1,
      taskName: 'Do laundry',
      completed: false
    },
    {
      id: 2,
      taskName: 'Get groceries',
      completed: false
    },
    {
      id: 3,
      taskName: 'Walk the dog',
      completed: false
    }
  ];


  const [tasks, setTasks] = useState(initialData);

  const incompleteTasks = tasks.filter(task => !task.completed).length;

  return (
    <>
    <div className="card-bg">
      <h1>To-Do List :)</h1>
      <h2>{incompleteTasks} tasks remaining!</h2>
      <TaskForm tasks={tasks} setTasks={setTasks} />
    </div>
    </>
  );
}

export default App;