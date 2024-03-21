import React, { useRef, useEffect } from 'react';
export default function Text()
{
    const textBoxRef = useRef(null);
    useEffect(() => {
        textBoxRef.current.focus();
      }, []);
    
    
    return(
    <div>
        <input type="text"/><br></br>
        <input  ref={textBoxRef} type="text" />
        </div>
    );
}