import React, { useState, useEffect } from "react";
import Timer from "./Timer";

export default function TimerWrapper (){
    const [isVisible, setIsVisible] = useState(true);
    const IsVisibility = () => {
        setIsVisible((prevState) => !prevState);
      };
    

    return(
      
        <>
         {isVisible && <Timer />}
      <button onClick={IsVisibility}>{isVisible ? "Hide" : "Show"}</button>
        </>
    )
}