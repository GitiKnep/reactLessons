import React, { useState, useEffect } from "react";

export default function Timer (){
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes((prevMinutes) => prevMinutes + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
     <h2>{`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h2>
    </div>
  );
};

