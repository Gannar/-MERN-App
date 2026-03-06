import React from "react"
import axios from "axios"

function TaskItem({task}){

const toggleTask = async()=>{
 await axios.put(`http://localhost:5000/api/tasks/${task._id}`,{
  completed:!task.completed
 })

 window.location.reload()
}

const deleteTask = async()=>{
 await axios.delete(`/api/tasks/${task._id}`)
 window.location.reload()
}

return(
<div>

<span
 style={{
 textDecoration: task.completed ? "line-through" : "none",
 marginRight:"10px"
 }}
>

{task.title}

</span>

<button onClick={toggleTask}>✔</button>
<button onClick={deleteTask}>❌</button>

</div>
)

}

export default TaskItem