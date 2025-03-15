import { useState } from 'react';
import './App.css'

function App() {

  const [colour, setColour] = useState('white');

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: colour }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-lg px-3 py-2'>
          <button
            onClick={() => setColour("red")}
            className='outline-none px-4 py-1 rouneded-full text-white shadow-lg'
            style={{ backgroundColor: 'red' }}
          >Red</button>
          <button
            onClick={() => setColour("green")}
            className='outline-none px-4 py-1 rouneded-full text-white shadow-lg'
            style={{ backgroundColor: 'green' }}
          >Green</button>
          <button
            onClick={() => setColour("blue")}
            className='outline-none px-4 py-1 rouneded-full text-white shadow-lg'
            style={{ backgroundColor: 'blue' }}
          >Blue</button>
           <button
            onClick={() => setColour("black")}
            className='outline-none px-4 py-1 rouneded-full text-white shadow-lg'
            style={{ backgroundColor: 'black' }}
          >Black</button>
           <button
            onClick={() => setColour("brown")}
            className='outline-none px-4 py-1 rouneded-full text-white shadow-lg'
            style={{ backgroundColor: 'brown' }}
          >Brown</button>
           <button
            onClick={() => setColour("yellow")}
            className='outline-none px-4 py-1 rouneded-full text-black shadow-lg'
            style={{ backgroundColor: 'yellow' }}
          >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
