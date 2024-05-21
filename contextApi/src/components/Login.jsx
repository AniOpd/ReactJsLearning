import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const {setUser} = useContext(UserContext)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = (e)=>{
        e.preventDefault()
       if(username !='' && password !=''){
           setUser({username,password})
       }
       else{
           alert('Please fill all the fields')
       }
    }
  return (
    <div>
        <h1>Login</h1>
        <form action="submit">
        <input type="text" placeholder='username' 
        value={username} onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="password" placeholder='password' 
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleLogin} >Login</button>
        </form>
    </div>
  )
}

export default Login
