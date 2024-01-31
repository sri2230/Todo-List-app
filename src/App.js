import React,{useState} from "react";
import TodoList from "./TododList";

const App = () => {
  const[task,setTask] = useState("");
  const[todos,setTodos] = useState([]);
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler= e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
    
  }
  const deleteHandler = (indexvalue)=>{
   const newTodos=todos.filter((todo,index)=>index !== indexvalue);
   setTodos(newTodos);
  }
  return(
    <div>
      <center>
        <div id ="card">
          <div id ="card-body">
           <h1 id ="card-title">Todo Management Application</h1>
           <form onSubmit={submitHandler}>
            <input type = "text" name = "task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
            <input type = "submit" value = "Add" name = "Add"/>
           </form>
           <TodoList todolist={todos} deleteHandler = {deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}
export default App