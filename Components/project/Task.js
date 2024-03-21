import {useDispatch} from 'react-redux'
import { setOneTask,deleteTask} from './Store/action/actionToDo'
import Card from '@mui/material/Card';
import { CardActions, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const Task = ({task}) => {
    const dis=useDispatch()

    const del=async ()=>{
    let url='https://dummyjson.com/todos/'+task.id
       const resppnse =  await fetch(url, {method: 'DELETE',})
         dis(deleteTask(task.id))
    }
    const fin=()=>{
        task.completed=true
        dis(setOneTask(task))
    }
    return (<>
    <Card  sx={{ width: 300, height: 225 }}>
     {console.log(task)}
     <CardContent >
     <p>the task is: {task.todo}</p>
     <p>completed: {task.completed+' '} </p>
     </CardContent >
     <Button  variant="outlined" startIcon={<DeleteIcon />} onClick={del}>delete</Button>
     <Button  variant="contained" endIcon={<AssignmentTurnedInIcon />} onClick={fin}>completed</Button>
  
     </Card>
    </>  );
}
 
export default Task;