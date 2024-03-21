import {useParams } from "react-router-dom";
import ArrCourse from "./ArrCourse";
const Details = () => {
    let {code}=useParams()
    let course=ArrCourse.find(i => i.code == code);
    if(!course)
    alert("קורס לא קיים")
    return ( <div>
        
          <p>{course.name} שם החוג</p>
          <p>{course.price} מחיר</p>
          <p>{course.numLessons} מספר שיעורים</p>

      </div>
   );
}
 
export default Details;