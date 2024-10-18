import React, { useState } from 'react'
//renders an input box and a button for creating new tasks. 
//Decide where the shared state should live. This is where you would also want to define the functions for updating the app state, including:

//a function for toggling the complete status of a task
//a function for adding a new task
//a function for deleting a task


function TaskForm({ tasks, setTasks }) {
  const [taskData, settaskData] = useState({ taskName: '', completed: false });

  function handleAddTask(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1, completed: false };
      setTasks([...tasks, newTask]);
      settaskData({ taskName: '', completed: false });
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTaskCompletion(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const newListUI = tasks.map((task) => (
    <div className="task-container" key={task.id} style={{ display: 'flex', justifyContent: 'center', justifyContent: "space-between", margin: '1em' }}>
      <input
        className="check-box"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.taskName}
      </p>
      <button className='btn-delete' onClick={() => handleDeleteTask(task.id)}>Remove</button>
    </div>
  ));

  return (
    <>
      <form className="form" onSubmit={handleAddTask}>
        <input 
          className="input-box"
          type='text'
          value={taskData.taskName}
          onChange={(e) => settaskData({ ...taskData, taskName: e.target.value })}
        />
        <button className='btn-task' type="submit">New Task</button>
      </form>

      <div>
        {newListUI}
      </div>
    </>
  )
}

export default TaskForm;
