import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import {useNavigate} from "react-router-dom"
import Row from '../movieRows/Row'
import Banner from '../banner/Banner'
import Navbar from "../navbar/Navbar"
import requests from '../../request'
import "../../App.css"



function DashBoard() {
  let {isAuth} = useContext(AuthContext);



  // console.log(current_local_user);
  const navigate = useNavigate();
  const navigateEffect = useEffect(()=>{ 
    let current_local_user = JSON.parse(localStorage.getItem("current_user"));
    console.log(current_local_user);
    if( current_local_user === null)  {
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
       <div className='app'>
       <Navbar/>
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