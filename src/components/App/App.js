import React, { useState } from 'react'
import "./App.css"
import Login from '../Login/Login'


const App = () => {
const [currentUser, setCurrentUser] = useState('')



  return (
    <main className='App'>
      <Login setCurrentUser={setCurrentUser}/>
    </main>
  )
}

export default App