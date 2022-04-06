import React from 'react'
import { Avatar } from '@mui/material';
import "../styles/Navbar.css"

 const Navbar  = ({userData})=> {
  //  console.log(userData)
  return (
    <>
    <div className="nav">
        <img
        className='nav_logo'
         src="https://i.ibb.co/dgVdHZ4/netflix-logo.webp"
         alt="Netflix" />
      
      <Avatar className='nav_avatar'
       alt="Remy Sharp" src={userData.picture}/>
    </div>
    </>
  )
}

export default Navbar