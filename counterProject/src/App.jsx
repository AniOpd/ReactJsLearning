import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
const addvalue=()=>{
  if(counter==20){
    alert('counter value is 20');
    return;
  }
  counter++;
  setCounter(counter);
}

const revmovevalue=()=>{
  if(counter==0){
    alert('counter value is 0');
    return;
  }
  counter--;
  setCounter(counter);
}

  return (
    <>
    <h1>chai or react</h1>
    <h2 id='ct'>counter value: {counter}</h2>
    <button
    onClick={addvalue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={revmovevalue}
    > remove value {counter}</button>
    <p>footer: {counter*20}</p>
    </>
  )
}

export default App
