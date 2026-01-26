import React, { use, useLayoutEffect, useRef, useState,useEffect } from 'react'

function UseLayoutEffect() {
    const [toggle,setToggle] = useState(false);
    const textRef = useRef();

    useLayoutEffect(()=>{
        if(textRef.current != null){
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`;

        }

    },[toggle]);
  return (
    <div>
      <button onClick={()=>setToggle(!toggle)}>toggle</button>
      {toggle && <h3 ref={textRef}>Codinggggg</h3>}
    </div>
  );
}

export default UseLayoutEffect
