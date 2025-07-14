import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
 const increment = () => {
  setCount(val =>val + 1)
 }
  const decrement = () => {
  setCount(val =>val - 1)
 }

 const reset = ()=>{
  setCount(0)
 }

 useEffect(()=>{
  const handleKey = (e)=>{
    if(e.key === 'ArrowUp') increment();
    else if(e.key === 'ArrowDown') decrement();
    else if(e.key === 'r') reset();
  }
  window.addEventListener('keydown',handleKey);
  return ()=>window.removeEventListener('keydown',handleKey)
 })

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div>
        <button className='dec' onClick={decrement}>Dec</button>
        <button className='reset' onClick={reset}>Reset</button>
        <button className='inc' onClick={increment}>Inc</button>
        </div>
      </div>
    </>
  )
}

export default App