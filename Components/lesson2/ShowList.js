import React,{useState} from 'react';
export default function ShowList(){
  
  const [cnt, setCnt] =useState(0)
  const [arr, setArr] =useState(["Orange", "Apple","Mango"])
  let txt=""
  let num=0
  const addOne=()=>{
  setCnt(cnt+1)
   }
   const addToList=()=>{
    let x=[...arr, txt]
    setArr(x)
   
   }
   const saveFruit=(e)=>{
   txt = e.target.value;
   }
   const deleteOne=(i)=>{
     let copy=[...arr]
     copy.splice(i, 1)
     setArr(copy)
   }
    return(
    <>
    {cnt}
    <input type='button' value="הוסף אחד" onClick={addOne}></input>
    <input type='text' onKeyUp={saveFruit} ></input>
    <input type='button' value="הוסף לרשימה"  onClick={addToList}></input>
    <ul>
    {arr.map((item, index)=>{return<li>{item}
        <input type='button' value="מחק" onClick={()=>{deleteOne(index)}}></input>
    </li>})}
    </ul>
    </>
    )
    
}
