import React from 'react'
import Row from './components/Row'
import requests from './request'

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
    <Row title = "NETFLIX ORIGINALS" fetchURL={fetchNetflixOriginals} />
    <Row title = "Trending Now" fetchURL={fetchTrending} />
    </>
  )
}

export default app