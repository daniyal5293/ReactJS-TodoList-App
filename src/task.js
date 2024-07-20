export const Task = (props) => {
    return(
        <div className='tasks'  style={{backgroundColor:props.completed ? "lightgreen" : "aliceblue"}}>
        <h1>{props.TaskName}</h1>
       <div>
        <button className='btn2 COMP' onClick={() => props.completeTask(props.id)}>Complete!</button>
       <button className='btn2 UPDATE' onClick={() => props.updateTask(props.id)}>Update</button>
       <button className='btn2 DELETE' onClick={() => props.deleteTask(props.id)}>Delete</button>
       </div>
       </div>
      );
}