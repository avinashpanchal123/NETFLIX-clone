import React from 'react'
import Row from './components/Row'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import requests from './request'
import "./App.css"

function app() {
  let {fetchTrending,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries
  } = requests;

  return (
    <>
    <div className='app'>
      <Navbar/>
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
    </>
  )
}

export default app