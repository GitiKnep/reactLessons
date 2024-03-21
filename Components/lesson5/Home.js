import ListCourse from "./ListCourse";
import { Outlet,Link, useParams } from "react-router-dom"

const Home = () => {
    
    

    return (<>
    <div>
      <h1> מערכת חוגים לילדים</h1>
       <p>Hello {useParams().name} </p>
       <p>courses:</p>
       <ListCourse></ListCourse>
       </div>
       </>
         );
   
}
 
export default Home;