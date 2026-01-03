import React from "react";
import "./ToDoList.css";
import { useState } from "react";
const ToDoList = () => {
  const [title,setTitle]  = useState("");
  const [todos,setTodos] = useState([]);
  const addTask = async () =>{
    if(!title.trim()) return;
    await api.post("/tasks",{title});
  }
  const FetchToDos = async() => {
   const res =  await api.get("/tasks");
   setTodos(res.data.data);
  }
  return(
     <div className="ToDoContainer">
      <input placeholder="Add the task" type="text"  value={title} onChange={(event)=>setTitle(event.target.value)} className="TaskInput" />
      <button className="add-button" onClick={addTask} >Add</button>
      <ul>
          {
            todos.map((ele) =>(
              <li>{ele.title}</li>
            ))
          }
      </ul>
     </div>
  );
}
export default ToDoList;