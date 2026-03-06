import React,{useState} from "react"
import axios from "axios"

function TaskForm(){

const [title,setTitle] = useState("")

const submitTask = async(e)=>{
 e.preventDefault()

 await axios.post("http://localhost:5000/api/tasks",{title})

 window.location.reload()
}

return(
<form onSubmit={submitTask}>
<input
 type="text"
 placeholder="New Task"
 value={title}
 onChange={(e)=>setTitle(e.target.value)}
/>

<button>Add</button>
</form>
)

}

export default TaskForm