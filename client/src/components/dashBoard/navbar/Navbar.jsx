import React, { useState, useCallback, useEffect } from 'react';
import MovieList from './MovieList';
import { Avatar } from '@mui/material';
import { API_KEY } from '../../../request';
import axios from '../../../axios';
import "../../styles/Navbar.css"
import debounce from "lodash.debounce"

 const Navbar  = ({userData})=> {
  //  console.log(userData)
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [movieList, setMovieList] = useState([])
 
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

  useEffect(()=>{
    if( query !== ""){
    
      const fetchData = async()=>{
      const request = axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = (await request).data.results;
      console.log(data)
      setMovieList(data)
    }
    fetchData()
}
  }, [query])


  const changeHandler = event => {
    setShowResults(true)
    setQuery(event.target.value);
  }

  const showResultsHandler = ()=>{
    setShowResults(false)
    setQuery("")
  };

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 3000)
  , []);
  
  return (
    <>
    <div onClick={showResultsHandler} className="nav">
        <img
        className='nav_logo'
         src="https://i.ibb.co/dgVdHZ4/netflix-logo.webp"
         alt="Netflix" />

        
           <input
            autoComplete='off'
             onChange={debouncedChangeHandler} 
             id='nav_search'
              type="search"
               placeholder='Search' />
       
      
      <Avatar className='nav_avatar'
       alt="Remy Sharp" src={userData.picture}/>
    </div>
    {
      showResults &&
      <div className="results_div">
      {
        movieList.map((movie)=>{
          return <MovieList key={movie.id} movie={movie} />
        })
      }
    </div>
    }
    </>
  )
}

export default Navbar