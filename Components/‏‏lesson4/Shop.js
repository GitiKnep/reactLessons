import React, { useState } from "react";
import './Shop.css'
import Toy from './Toy'
import AddForm from "./AddForm";

export default function Shop(){
    
    const[arrToys, setArrToys]=useState ([{id: 1, name: "taki",qty: 25, fromAge: 8, toAge: 120, firstCount: 2, lastCount: 5,price:75},
    {id: 2, name: "sulamot vechavalim", qty: 20,fromAge: 6, toAge: 120, firstCount: 2, lastCount: 4 ,price:40},
    {id: 3, name: "pazel",qty: 10, fromAge: 5, toAge: 120, firstCount: 1, lastCount: 5,price:50},
    {id: 4, name: "chevel",qty: 40, fromAge: 5, toAge: 45, firstCount: 1, lastCount: 20,price:30},
    {id: 5, name: "monapol",qty: 24, fromAge: 7, toAge: 120, firstCount: 2, lastCount: 5,price:120}])
  

    const [flag,setFlag]=useState()
    const [flag2,setFlag2]=useState("משחקים לקטנטנים")
    const[count,setCount]=useState(0)
    const [cart, setCart]=useState([])
    const  addToCart=(oneToy)=>{
        if (oneToy.qty == 0) {
            alert("חסר במלאי")
            return;
        } 
        oneToy.qty--
       setCart([...cart,oneToy])
       setCount(count+1)
       if(count==3)
            alert("קיבלת הנחה")
    
    }
    const  deleteFromCart=(oneToy)=>{
        oneToy.qty++;
        setCount(count--)
        let index=cart.findIndex(item=> item.id==oneToy.id)
        let copy=[...cart]
        copy.splice(index, 1)
        setCart(copy)

        }
        const addToStock = (newItem) => {
            setArrItems([...arrItems, newItem]) 
            {console.log(3)}  
        }
        const changeFilter=()=>{
            setFlag(!flag)
            if(flag)
            setFlag2("משחקים לקטנטנים")
            else
            setFlag2("כל המשחקים")
        }
       
   
   return(<><h1>Toys Shop</h1>
    <div className="theToy"> 
    {arrToys.map((item)=>{return<Toy oneToy={item} func={addToCart} value="add to cart"></Toy>
    })}
    </div>
    <h1>Cart</h1>
    <div className="cart">
     {cart&&cart.map(item=>{return<Toy oneToy={item} func={deleteFromCart} value="delete from cart" ></Toy>})}
     </div>
     <AddForm add={addToStock}></AddForm>
     </>
    
    )
    
}
