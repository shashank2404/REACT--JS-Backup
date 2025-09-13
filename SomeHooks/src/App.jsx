import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 py-3 my-12 bg-pink-300 text-red-400'>
        
        {/* Password + Copy Button */}
        <div className='flex shadow rounded-3xl overflow-hidden mb-4 bg-amber-50'>
          <input 
            type='text'
            value={password}
            className='outline-none px-3 py-1 flex-1'
            placeholder='password'
            readOnly
          />
          <button
            className='outline-none bg-blue-500 text-white font-semibold py-0.5 px-4 shrink-0 hover:bg-blue-600 transition'
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={numberAllowed}
              id='numberinput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='numberinput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={charAllowed}
              id='charinput'
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor='charinput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
