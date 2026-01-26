import React from "react"

export const EventProps = ()=>{

    const HandleWelcomeUser = (user)=>{
        alert(`Hey, ${user}`);
    };

    const HandleHover = ()=>{

        alert(` Thanks for hovering me `);
    };

    return(
    <>
    <welcomeUSer
        onClick={()=> HandleWelcomeUser("Hammad")}
        onMouseEnter={HandleHover}/>
        </>

    );
};
const WelcomeUser = (props)=>{
    return(
        <>
        <button onClick={props.HandleWelcomeUser} >Click</button>
        <button onMouseEnter={props.HandleHover}>Hover Me</button>
        </>
    );
};