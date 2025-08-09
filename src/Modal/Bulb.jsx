import React, { useState } from 'react'

function Bulb() {

  const [isOn,setIsOn] = useState(false)

  const handletoggle = ()=>{
    setIsOn(!isOn)

  }
  return (
    <div className='font-bold flex justify-center items-center'>
      <h1>{isOn ? "on" :"off"}</h1>
      <button onClick={handletoggle} className='btn btn-danger'>
        {isOn ? "turn off" :"turn on"}
        
      </button>
      
    </div>
  )
}

export default Bulb