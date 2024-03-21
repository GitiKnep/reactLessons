import React, { useState } from "react";
export default function AddItem(props){
    const [newItem,setNewItem]=useState({id: "", name: "", qty: 5,fromAge: 1, toAge: 120, firstCount: 1, lastCount: 1 ,price:0})
    const add1 = (e) => {
        e.preventDefault()
        {console.log("2")}
        props.add(newItem)
    }
    const saveNewItem=(e)=>{
        {console.log(newItem)}
        let nameInput = e.target.name
        let copy={...newItem}
        copy[nameInput] = e.target.value;
        setNewItem(copy)
        }
    return(
        <form onSubmit={add1}>
        <div>
            <label for="">קוד פריט</label>
            <input type="text" onChange={saveNewItem} name="id"></input></div>
        <div>
            <label for="">שם המשחק</label>
            <input type="text" onChange={saveNewItem} name ="name"></input></div>
        <div>
            <label for="">כמות במלאי</label>
            <input type="number" onChange={saveNewItem} name="qty"></input></div>  
            {newItem.qty<5&&<p>כמות מידי קטנה</p>}
        <div>
            <label for="">מגיל</label>
            <input type="number" onChange={saveNewItem} name="fromAge"></input></div>
            {newItem.fromAge<1&&<p>גיל מידי קטן</p>}
        <div>
            <label for="">עד גיל</label>
            <input type="number" onChange={saveNewItem} name="toAge"></input></div>
            {newItem.toAge>120&&<p>גיל מידי גדול</p>}
        <div>
            <label for="">כמות מינמלית של שחקנים</label>
            <input type="number" onChange={saveNewItem} name="firsCount"></input></div>
            {newItem.firstCount<1&&<p>כמות שחקנים לא הגיונית</p>}
        <div>
            <label for="">כמות מקסימלית של שחקנים</label>
            <input type="number" onChange={saveNewItem} name="lastCount"></input></div>
            {newItem.lastCount<1&&<p>כמות שחקנים לא הגיונית</p>}
        <div>
            <label for="">מחיר</label>
            <input type="number" onChange={saveNewItem} name="price"></input></div>
            {newItem.price<=0&&<p>מחיר לא הגיוני</p>}
          <input type="submit"></input>
          </form>)
}