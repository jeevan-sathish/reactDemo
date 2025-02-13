import React, { useState } from 'react'

const Counter = () => {
    const [value,setValue]=useState(0);

  const counter =()=>{
    setValue(value+1);
  }
  return (
    <>
    <h1>this is counter button</h1>
    <button onClick={counter}>this is the value {value}</button>
    </>

  )
}

export default Counter