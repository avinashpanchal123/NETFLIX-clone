import React from 'react'
import { Avatar } from '@mui/material';
import "../styles/Navbar.css"

 const Navbar  = ()=> {
  return (
    <>
    <div className="nav">
        <img
        className='nav_logo'
         src="https://i.ibb.co/dgVdHZ4/netflix-logo.webp"
         alt="Netflix" />
      
      <Avatar
      className='nav_avatar'
       sx={{ color:"red"}}>N</Avatar>
    </div>
    </>
  )
}

export default Navbar