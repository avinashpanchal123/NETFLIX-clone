import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import {useNavigate} from "react-router-dom"
import Row from './Row'
import Banner from './Banner'
import Navbar from './navbar/Navbar'
import requests from '../../request'
import "../../App.css"

function DashBoard() {
  let {isAuth} = useContext(AuthContext);
  let userData = JSON.parse(localStorage.getItem("loginData"));;
  // console.log(isAuth)
  const navigate = useNavigate();
  const navigateEffect = useEffect(()=>{
    if( userData === null) {
      console.log("user is not authenticated")
      
      navigate("/")
      
    }
  
  }, [])

  console.log(isAuth);
  let {fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries
  } = requests;

  return  (
    <>
     {
       userData &&
       <div className='app'>
       <Navbar userData ={userData}/>
     <div>
     <Banner/>
     <Row
      title = "Trending Now"
       fetchURL={fetchTrending}
       isLargeRow
        />  
     <Row title = "Top Rated" fetchURL={fetchTopRated} />
     <Row title = "Action Movies" fetchURL={fetchActionMovies} />
     <Row title = "Comedy Movies" fetchURL={fetchComedyMovies} />
     <Row title = "Horror Movies" fetchURL={fetchHorrorMovies} />
     <Row title = "Romance Movies" fetchURL={fetchRomanceMovies} />
     <Row title = "Documentaries" fetchURL={fetchDocumentaries} />

     </div>

     </div>
     }
    </>
  )
}

export default DashBoard