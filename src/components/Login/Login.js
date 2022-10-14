import React, { useState } from 'react'
import './Login.css'

const Login = ({setCurrentUser}) => {
const [login, setLogin] = useState('')

// const handleChange = () => {
    
// }
// This is where we will make a query 
// as we change state this will trigger a fetch call 
// fetch call will look into the users and pass in the value of the username

//backend needs a string with 5 diff endpoint with each users' data

  return (
    <div>
        <select className='login-selection' id='login' value={login} onChange={e=>setCurrentUser(e.target.value)}>
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