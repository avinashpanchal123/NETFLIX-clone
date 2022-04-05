import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import {useNavigate} from "react-router-dom"
import Row from './Row'
import Banner from './Banner'
import Navbar from './Navbar'
import requests from '../../request'
import "../../App.css"

function DashBoard() {
  let {isAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateEffect = useEffect(()=>{
    if( !isAuth) {
      navigate("/")
    }
  
  }, [])

  let {fetchTrending,
    fetchNetflixOriginals,
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
       isAuth &&
       <div className='app'>
       <Navbar />
     <Banner/>
     <Row
      title = "NETFLIX ORIGINALS"
       fetchURL={fetchNetflixOriginals}
       isLargeRow
        />
     <Row title = "Trending Now" fetchURL={fetchTrending} />
     <Row title = "Top Rated" fetchURL={fetchTopRated} />
     <Row title = "Action Movies" fetchURL={fetchActionMovies} />
     <Row title = "Comedy Movies" fetchURL={fetchComedyMovies} />
     <Row title = "Horror Movies" fetchURL={fetchHorrorMovies} />
     <Row title = "Romance Movies" fetchURL={fetchRomanceMovies} />
     <Row title = "Documentaries" fetchURL={fetchDocumentaries} />
     </div>
     }
    </>
  )
}

export default DashBoard