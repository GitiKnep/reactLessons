import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/lesson2/toDoList';
import ShowList from './Components/lesson2/ShowList';
import {useNavigate, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/lesson5/Home';
import ListCourse from './Components/lesson5/ListCourse';
import Details from './Components/lesson5/Details';
import Gym from './Components/Lesson6/Gym/Gym';
import Shop from './Components/Lesson6/Shop/Shop';
import AddFrom from './Components/Lesson6/Shop/AddFrom';
import Toy from './Components/Lesson6/Shop/Toy';
import Person from './Components/lesson7/Person';
import Search from './Components/lesson7/Search';
import Text from './Components/lesson7/Lifecycle/Text';
import Timer from './Components/lesson7/Lifecycle/Timer';
import TimerWrapper from './Components/lesson7/Lifecycle/TimerWrapper';
import LogIn from './Components/project/LogIn'
import Users from './Components/project/Users'
import ListToDo from './Components/project/ListToDo'
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
function App() {
  {/*const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }*/}
  return (
    
          <>
          <div>
        
      {/*  <Snackbar open="true" autoHideDuration={6000} onClose={handleClose}>
        </Snackbar>*/}

         
          <BrowserRouter> 
          <Routes>
          <Route path='/' element={<LogIn></LogIn>}></Route>
          <Route path='listToDo' element={<ListToDo></ListToDo>}> </Route> 
          <Route path='users'  element={<Users></Users>}> 
          <Route path='listToDo' element={<ListToDo></ListToDo>}> </Route> 
          </Route>
          </Routes>
          </BrowserRouter>
        {/* <FilterArr></FilterArr>*/}  
        {/*}  <TimerWrapper></TimerWrapper>*/}
          {/*<Text></Text>*/}
          {/*<Users></Users>*/}
          {/*<Gym></Gym>*/}
         { /*
          <BrowserRouter> 
          <Routes>
          <Route path='/' element={<Login></Login>}></Route>
            <Route path='home/:name' element={<Home></Home>}>
            <Route path="details" element={<Details></Details>}></Route>
            </Route>
          </Routes>
          </BrowserRouter>
  */}
          </div>
        {/*<ToDoList></ToDoList>*/ } 
         {/* <ShowList></ShowList>*/ }
        {/*<Shop></Shop>*/}
       
         </>
  );
}
export default App;
