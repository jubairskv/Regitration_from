import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const userName = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const handleLogout= () =>{
        localStorage.removeItem("loggedin")
        navigate("/login")
    }
  return (
    <div>
        <h3>{userName.name}</h3>
        <button onClick={handleLogout} type='submit'>Logout</button>
    </div>
    
  )
}

export default Home