import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {Link, Outlet} from 'react-router-dom'
import { Card } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import  './Style.css'

const Users = () => {

       let arrUsers = useSelector(s => s.users.arrUsers)
    
       let currentUser = useSelector(s => s.users.currentUsers)

    const[filter1, setFilter1]=useState(arrUsers)
   

   
   


    return ( <>
    <legend ><b>hello {currentUser.firstName}</b> </legend>     
    <Link  to="listToDo" className='lin' >הצג רשימת משימות </Link>  
      <Paper sx={{ width: 230 }}>
      <legend  className='le'>&laquo;	<b>options</b> &raquo;</legend> 
      <MenuList>
        <MenuItem> 
          <Typography onClick={()=>{setFilter1(arrUsers.slice().sort((a,b)=>a.age-b.age))}} variant="inherit">מיין גיל מהקטן לגדול</Typography>
        </MenuItem>
        <MenuItem>
          <Typography onClick={() =>{setFilter1 (arrUsers.slice().filter(i => i.gender=="male"))}} variant="inherit">סינון גברים</Typography>
        </MenuItem>
        <MenuItem>
          <Typography onClick={() =>{setFilter1 (arrUsers.slice().filter(i => i.gender=="female"))}} variant="inherit" noWrap>סינון נשים </Typography>
        </MenuItem>
        <MenuItem>
          <Typography  onClick={() =>{setFilter1(arrUsers)}} variant="inherit" noWrap>הצג הכל </Typography>
        </MenuItem>
      </MenuList>
    </Paper> 
  
      <Outlet></Outlet>
      <legend>Users </legend> 

            {filter1&&filter1.map(user => {
          return <Card className='cards' > <div key={user.id}>
         <h5 > {user.firstName} - {user.lastName}</h5>age: {user.age}<br></br> gender: {user.gender}<br></br> email: {user.email}<br></br> phone: {user.phone} 
     </div> </Card>})}
</>);
}
    export default Users;