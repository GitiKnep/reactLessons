import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setCurrentUsers ,setAllUsers} from './Store/action/actionUsers'
import { useEffect } from 'react'
import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  './Style.css'
{/* דברים שצריך להתקין בסמינר
npm install @mui/icons-material
*/ }


const LogIn = () => {
    let nav = useNavigate()
    let currentUser = useSelector(store => store.users.currentUsers)
    let users= useSelector(store => store.users.arrUsers)
    const dis = useDispatch()
    let user={
        name:"",
        password:""
    }
   
    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers =() => {
   let url='https://dummyjson.com/users'
    fetch(url)
   .then(response => response.json())
   .then(data=>{
    const arr1= data.users;
      dis(setAllUsers(arr1))
    })
    .catch(error => {
      console.error('Error:', error);
    });
};



  

    const cheackIsAdmin=()=>{
        if((user.name=="admin")&&(user.password=="ad12min34"))
    {
        dis(setCurrentUsers({password:"ad12min34",firstName:"admin"}))            
        nav('/users')
    }
    else{
    let OneUser=users.filter(x=>x.password==user.password&&x.firstName==user.name)[0]
    if(OneUser){
    dis(setCurrentUsers(OneUser))
    console.log(OneUser)
    console.log(currentUser)
   
     nav('/listToDo')

    }
    else
    console.log("אחד מהנתונים שהקשת שגוי")
}
}

const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  





    return ( <>
    <div  className='enter'>   
    <fieldset>
            <legend>&laquo;	<b>Login</b> &raquo;</legend>  
    <TextField label="first name" onChange={(e)=>user.name=e.target.value}/><br></br>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>user.password=e.target.value}
            endAdornment={
              <InputAdornment >
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            } label="Password"/>
        </FormControl>
        <br></br><br></br>
        <Button variant="contained" onClick={cheackIsAdmin}>היכנס</Button>
        </fieldset>
        </div> 
</>
 );
}

export default LogIn;