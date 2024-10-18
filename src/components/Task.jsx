// renders a single task, including a checkbox for indicating if the task is completed, and a button for deleting the task

// each task should have a status field indicating whether the task is pending or completed. 
import TaskForm from "./TaskForm"

function Task() {
    return (
        <>
        <input type="checkbox">
        <TaskForm/>
        </input>
        </>
    )
}

