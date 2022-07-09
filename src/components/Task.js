import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Task.css'

const Task = () =>{

  const [task, setTask] = useState()
  const [listTask, setListTask] = useState([])




  const handleClickTask = () =>{
      listTask.push(task)
      console.log(listTask)
       setTask('')
  }

  

  return(
    <>



    <div className="container">
     <TextField 
     id="outlined-basic" 
     label="Outlined" 
     variant="outlined" 
     onChange={ (e) => setTask(e.target.value)}
     />
 
     <Button variant="contained" onClick={ () => handleClickTask()}>Contained</Button>
    </div>

    {listTask.map((item)  =>{
      return(
        <>
          <li >{item}</li>
        </>
      )
    })}
 

    </>
  )
}

export default Task