import React, { useState } from 'react'
//renders an input box and a button for creating new tasks. 
//Decide where the shared state should live. This is where you would also want to define the functions for updating the app state, including:

//a function for toggling the complete status of a task
//a function for adding a new task
//a function for deleting a task


function TaskForm({ tasks, setTasks }) {
  const [taskData, setTaskData] = useState({ taskName: '', completed: false });
  const [filter, setFilter] = useState("All"); // State for task filter

  function handleAddTask(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1, completed: false };
      setTasks([...tasks, newTask]);
      setTaskData({ taskName: '', completed: false });
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTaskCompletion(id) {
    setTasks(tasks.map(task =>
      task.id === id && !task.completed
        ? { ...task, completed: true }
        : task
    ));
  }

  // Filter tasks based on the filter state
  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true; // For "All"
  });

  const newListUI = filteredTasks.map((task) => (
    <div key={task.id} style={{ display: 'flex', justifyContent: "space-between", margin: '1em' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        disabled={task.completed} // Disable if completed
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.taskName}
      </p>
      <button className='btn-delete' onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  ));

  return (
    <>
      <form onSubmit={handleAddTask} className='taskForm'>
        <input
          type='text'
          value={taskData.taskName}
          className="input-box"
          onChange={(e) => setTaskData({ ...taskData, taskName: e.target.value })}
          placeholder="Add a new task"
        />
        <button className='btn-task' type="submit">Add Task</button>
      </form>

      <div className='filter-buttons'>
        <button className="filter-button-indiv" onClick={() => setFilter("All")}>All</button>
        <button className="filter-button-indiv" onClick={() => setFilter("Completed")}>Completed</button>
        <button className="filter-button-indiv" onClick={() => setFilter("Pending")}>Pending</button>
      </div>

      <div className='taskList'>
        {newListUI}
      </div>
    </>
  );
}

export default TaskForm;