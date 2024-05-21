import React, { useState } from 'react'
import "./style.css"
import { Link, NavLink } from 'react-router-dom'
function Header() {
  const [item, SetItem] = useState(JSON.parse(localStorage.getItem("usersData")) || [])

       function openModal() {
      Modal.classList.remove("hidden")
    }

  
   
  return (
    <header className='header'>
    <div className="container header-container">
    <div className="logo">
        <h1>A<span className='logo-span'>PI</span></h1>
    </div>
    <nav className='nav'>
        <ul className='nav-list'>
        <NavLink className='nav-item'>Home</NavLink>
        <NavLink className='nav-item'>About</NavLink>
        <NavLink className='nav-item'>Contacts</NavLink>
            <button type="submit" className="homebtn">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
        </ul>
    </nav>
    
    {item.map((data) => (
    <div className="avatar-div">
       <img 
        onClick={()=> { openModal() }} 
       className='avatar' src={data.avatar}  />
       <p className='avatar-text'>{data.name}</p>
      
    </div>
       ))}
    
    </div>
    </header>
  )
}

export default Header