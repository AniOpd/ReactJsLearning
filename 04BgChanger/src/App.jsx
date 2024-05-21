import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor]=useState("blue")

  return (
    <>
      <div className="w-full h-screen duration-200"  style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>Yellow
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>Blue
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"purple"}} onClick={()=>setcolor("purple")}>Purple
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"black"}} onClick={()=>setcolor("black")}>Black
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
