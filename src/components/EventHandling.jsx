import React from 'react'

function EventHandling() {

    // function handleButtonClick(){
    //     alert(`thanks for clickinjg`)
    // }

    const handleButtonClick = () => {
        alert(`thanks for click`)
    }



  return (
    <div>
        {/* function component with named function  */}
      <button onClick={handleButtonClick}>Click Me</button> <br />

      {/* Fat Arrow Function  */}
      <button onClick={() => handleButtonClick()}>Click Me 2</button> <br />

      {/* inline Arrow functions */}
      <button onClick={()=> alert('am a inline arrow function')}>Inline Arrow fun</button>
    </div>
  )
}

export default EventHandling
