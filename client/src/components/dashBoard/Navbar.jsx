import React, { useState } from 'react'
import { Avatar } from '@mui/material';
import { API_KEY } from '../../request';
import axios from '../../axios';
import "../styles/Navbar.css"
import debounce from "lodash.debounce"

 const Navbar  = ({userData})=> {
  //  console.log(userData)
  const [showResults, setShowResults] = useState(false)

 
  const searchMovies = (e)=>{
    // let timer;
    // let query = e.target.value;
    // clearTimeout(timer)
    // timer = setTimeout(()=>{
    //   const fetchData = async()=>{
    //     const request = axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    //     const data = (await request).data.results;
    //     console.log(data)
    //   }
    //   fetchData()
    // }, 5000)
    // setShowResults(true)
   
    // console.log(query)
  }

  const showResultsHandler = ()=>{
    setShowResults(false)
  }
  return (
    <>
    <div onClick={showResultsHandler} className="nav">
        <img
        className='nav_logo'
         src="https://i.ibb.co/dgVdHZ4/netflix-logo.webp"
         alt="Netflix" />

        
           <input onChange={searchMovies} id='nav_search' type="search" placeholder='Search' />
       
      
      <Avatar className='nav_avatar'
       alt="Remy Sharp" src={userData.picture}/>
    </div>
    {
      showResults &&
      <div className="results_div">
      
    </div>
    }
    </>
  )
}

export default Navbar