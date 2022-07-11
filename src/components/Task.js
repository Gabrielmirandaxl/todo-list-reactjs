import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BsFillTrashFill } from 'react-icons/bs'
import {GiConfirmed} from 'react-icons/gi'
import './Task.css'

const Task = () =>{

  const [listTask, setListTask] = useState([])
  const [task, setTask] = useState('')
  const [id, setId] = useState(0)
  const [complete, setComplete] = useState(false)
  




  const handleClickAdd = () =>{
    
    if(!task){
      alert("Não foi possivel adiconar uma tarefa!")
    }
    else{
    setId(id + 1)
    listTask.push({ id: id, task: task, concluded: false})
    document.getElementById('standard-basic').value = null
    setTask(null)
    }
    console.log(listTask)
  }

  const handleClickDelet = (id) =>{
    setListTask(listTask.filter( (item) => item.id !== id))
    console.log(id)
  }

  const handleClickComplete = (id) =>{
    setListTask(listTask.map((item) =>{
      if(item.id === id){
        item.concluded =  !item.concluded
      }
      return item
    }))
  }

  

 

  return(
  
    <>
  
    <div className="main">

      <div className="form-task">

      <TextField 
      id="standard-basic" 
      label="Digite uma tarefa" 
      variant="standard" 
      onChange={(e) => setTask(e.target.value)}
      />

      <Button variant="contained" onClick={() => handleClickAdd()} color="success" size="small" style={{margin: "17px 0px 0px 10px"}}>Add Task</Button>

      </div>

      <div className="show-tasks">

      <ul className="list-task">

        {listTask.map((item) =>{
          return(
            <li ><div> <GiConfirmed  onClick={() => handleClickComplete(item.id)} id="complete" className={ item.concluded ? "concluded" : "no-concluded"}  />  {item.task} </div> <div> <BsFillTrashFill className="delete" onClick={ () => handleClickDelet(item.id)}/> </div></li>
 
          )
        })}

      </ul>

      </div>


    </div>

    </>
  )
}

export default Task