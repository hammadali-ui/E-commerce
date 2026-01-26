import React, { useEffect, useState } from 'react'
// import { MdCheck,MdDeleteForever  } from "react-icons/md";

const ToDoList = () => {
    const [inputValue,setInputValue] = useState("");
    const [task,setTask] = useState([]);
    const [dateTime , setDateTime] = useState("");

    const handleInputChange = (value)=>{
        setInputValue(value);

    }
    const handleFormSubmit = (event)=>{
        event.preventDefault();

        if (!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
            return;
        } 


        setTask((prevTask) => [...prevTask,inputValue]);

        setInputValue("");

       
    };

     // Todo date and time 
    //  console.log("hey");
     

     useEffect(()=>{
        const interval = setInterval(()=>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        setDateTime(`${formattedDate}-${formattedTime}`);

        },1000);

        return()=> clearInterval(interval);

     } ,[]);
  return (
    <section className='todo-container'>
        <header>
            <h1>To Do List</h1>
            <h2>{dateTime}</h2>
        </header>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' autoComplete='off' value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
        </section>
        <section className='my-unordr'>
            <ul>
                {task.map((curTask,index)=>{
                    return(
                        <li key={index}>
                            <span>{curTask}</span>
                            <button className='chk-btn'>Tick</button>

                            <button className='dlt-btn'>Delete</button>

                        </li>
                    )
                })}
            </ul>

        </section>
    </section>
  )
}

export default ToDoList
