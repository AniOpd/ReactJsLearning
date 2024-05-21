import { useState ,useCallback,useRef,useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const passwordRef = useRef(null)

  const fn=()=>{
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(includeNumbers){
      str+='0123456789'
    }
    if(includeSymbols){
      str+='!@#$%^&*()_+'
    }
    let pass=""
    for(let i=0;i<passwordLength;i++){
      const random=Math.floor(Math.random()*str.length)
      pass+=str[random]
    }
    setPassword(pass)
  }
  const passwordGenrator=useCallback(fn,[passwordLength,includeNumbers,includeSymbols]);


  const copytoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,passwordLength);
    window.navigator.clipboard.writeText(password)
  },[password])


useEffect(() => {
  passwordGenrator()
},[passwordLength,includeNumbers,includeSymbols,passwordGenrator])

  return (
    <> 
      <div className='w-full max-w-md mx-auto shadow-lg rounded-2xl px-4 py-3 my-8 bg-gray-800 text-orange-500'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden mb-4'>
            <input type="text"
            className='outline-none w-full py-1 px-3'
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button className='outline-none bg-red-700 text-white px-3 py-0.5 shrink-0'
            onClick={copytoClipboard}
            >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className="flex item-center gap-x-1">
            <input type="range"
            min="8"
            max="20"
            value={passwordLength}
            onChange={(e)=>setPasswordLength(e.target.value)}
            />
            <label htmlFor="">Length {passwordLength}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            checked={includeNumbers}
            onChange={
              ()=>setIncludeNumbers(!includeNumbers)
            }
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            checked={includeSymbols}
            onChange={
              ()=>setIncludeSymbols(!includeSymbols)
            }
            />
            <label htmlFor="">Symbols</label>
          </div>


        </div>


      </div>
    </>
  )
}

export default App
