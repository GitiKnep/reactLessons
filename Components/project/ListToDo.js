import { useDispatch, useSelector } from 'react-redux'
import {  setAllTask } from './Store/action/actionToDo'
import { useEffect } from 'react'
import Task from './Task'
import { Grid } from '@mui/material'



const ListToDo = () => {
    let dis = useDispatch()
    let currentUser = useSelector(store => store.users.currentUsers)
    let tasks= useSelector(store => store.toDo.arrTask)

    
    useEffect(() => {
        getAllTask()
    }, [])

    const getAllTask =  () => {
        let url='https://dummyjson.com/todo'
        fetch(url)
        .then(response =>response.json())
        .then(data=>{
        const arr2= data.todos;
          console.log(arr2);
          dis(setAllTask(arr2))
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };



    return ( <>     
      <Grid sx={{ display:'flex', flexGrow: 3 }} container spacing={4}>
    {console.log(tasks)}
    {tasks&&
    tasks.map(item=>
      {return(currentUser.firstName=="admin"||item.userId==currentUser.id)
    &&<p key={item.id}>{<Task task={item}></Task>}</p>})}
</Grid>
</>
 );
}

export default ListToDo;