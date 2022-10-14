import React, { useState } from 'react'
import './Login.css'

const Login = () => {
const [login, setLogin] = useState('')

const handleChange = () => {
    
}

  return (
    <div>
        <select className='login-selection' id='login' value={login} onChange={e=>setLogin(e.target.value)}>
            <option value='' disabled selected>Select Your User</option>
            <option value='Abby'>Abby</option>
            <option value='Chantal'>Chantal</option>
            <option value='John'>John</option>
            <option value='Mayu'>Mayu</option>
            <option value='Shirley'>Shirley</option>
        </select>
    </div>
  )
}

export default Login