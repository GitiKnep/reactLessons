import React from "react";
export default function Toy(props){
   let t=props.oneToy
    return(
    <div > 
    <h2>Name of the game: {t.name}</h2>
    <p>from age: {t.fromAge}</p>
    <p>until the age of: {t.toAge}</p>
    <p>minimum number of players: {t.firstCount}</p>
    <p>maximum number of players: {t.lastCount}</p>
    <p>price: {t.price}</p>
    
    <input type="button" defaultValue={props.value} onClick={()=>{props.func(t)}}></input>
    </div>
    )
}