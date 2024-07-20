
import { computeHeadingLevel } from '@testing-library/react';
import './App.css';
import {useState} from "react";
import {Task}  from './task';

 function App() {

    const [todolist, setTodolist] = useState([]);
    const [newTask,setNewTask] = useState("");
    const [error,seterror]=useState("");

    
  
     
    const handleChange = (event) => {
        setNewTask(event.target.value);
        seterror('');
    }

    const addTask = () => {
      const task = {
        id: (todolist.length===0) ? 1 : todolist[todolist.length-1].id + 1,
        TaskName: newTask,
        completed : false,
      }
      if(task.TaskName!==''){
        setTodolist([...todolist,task]);
        seterror('');
      }else{
        seterror("Please enter your todo!");
      }
      setNewTask('');
      
   
    }

    const deleteTask = (id) => {
      setTodolist(todolist.filter((task) => task.id!==id));
    }

    const completeTask = (id) => {
      setTodolist(todolist.map((task) => {
        if(task.id===id){
          return {...task,completed : true};
        }else{
          return task;
        }
      }))
    }
    
    const updateTask = (taskID)=>{
    if(newTask!==''){
   
    todolist.map((task) => {
     
        if(task.id===taskID){
          task.completed==true ? seterror("Task is completed already!!") :task.TaskName=newTask;

        }
       
        
      });
      setTodolist([...todolist]);
      setNewTask('');
      
    }else{
      seterror("Please Write your todo!");
    }
  
  }

  return (
    <div className="App">
     <div className="add">
     <input type="text" placeholder="write your to-do..." onChange={handleChange} value={newTask}/>
      <button onClick={addTask} className='btn1'>Add to List</button>
      {error&& <p style={{color:'red'}}>{error}</p>}
      
     </div>
     <div className="list">
      <div className='content'>
          {todolist.map((task) => {
            return(
            <Task 
            TaskName={task.TaskName}  
            completed={task.completed}
            id={task.id}
            completeTask={completeTask}
            updateTask={updateTask}
            deleteTask={deleteTask}   
              />
            
         
          );
          })}
       
      </div>
     </div>
    </div>
  );
}

export default App;
