import {Link, Outlet, useParams } from "react-router-dom";
import ArrCourse from "./ArrCourse"
import React,{ useState } from "react";

const ListCourse = () => {
    let {name}=useParams()
    const [num,setNum]=useState(0)
    return (  <>
    <h2>hello {name}</h2>
    {(ArrCourse.filter(item=>item.numLessons>=num).map(item=>{return <><Link to={"/listCourse/details/"+item.code}>{item.name}</Link><br/></>}))}
    <Outlet></Outlet>
    <input type="number" onChange={(e)=>{setNum(e.target.value)}}></input>
    </>);  
}
 
export default ListCourse;