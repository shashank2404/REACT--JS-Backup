
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment ,incrementByAmount,reset} from './features/counter/counterslice'
import { useState } from 'react'

function App() {
  const [amount,setAmount] = useState(0);
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementByClick(){
    dispatch(increment());
  }
  function handleDecrementByClick(){
    dispatch(decrement());
  }
  function handleResetByClick(){
    dispatch(reset());
  }
  function handleIncrementByAmount(){
    dispatch(incrementByAmount(amount))
  }
  return (
   <div className='container'>
    <button onClick={handleIncrementByClick}>+</button>
    <p>Count :{count} </p>
     <button onClick={handleDecrementByClick}>-</button>
     <br/>
     <br />
     <button onClick={handleResetByClick}>Reset</button>
     <input
     type='Number'
     value={amount}
     placeholder='Enter Amount'
    onChange={(e)=>setAmount(e.target.value)}
     />
     <br />
     <button onClick={handleIncrementByAmount}>Increment BY Amount</button>
   </div>

  )
}

export default App
