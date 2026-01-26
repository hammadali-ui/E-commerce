import React from 'react'
import { useRef } from 'react';

function Useref() {
    const inputEle = useRef();

    const handleClick = ()=>{
        console.log(inputEle.current);
        
        inputEle.current.style.width="300px";
    }
  return (
    <div >
      <input type="text" ref={inputEle} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Useref
