import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addvalue = () =>{
    console.log("clicked Value :",counter);
    setCounter(counter + 1);
  }
  const removevalue =()=>{
    console.log("removed Value : ",counter);
    setCounter(counter - 1);
  }
  return (
    <>
    <h1>Shanu & React</h1>
    <h2>Counter Value : {counter}</h2>
    <button 
    onClick={addvalue}>ADD VALUE : {counter}</button>
    <br/>
    <br/>
    <button onClick={removevalue}>REMOVE VALUE : {counter}</button>
    </>
  )
}

export default App
