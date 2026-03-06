import React,{useEffect,useState} from "react"
import axios from "axios"
import TaskItem from "./TaskItem"

function TaskList(){

const [tasks,setTasks] = useState([])

useEffect(()=>{
 axios.get("http://localhost:5000/api/tasks")
 .then(res=>setTasks(res.data))
},[])

return(
<div>
 {tasks.map(task=>(
  <TaskItem key={task._id} task={task}/>
 ))}
</div>
)

}

export default TaskList