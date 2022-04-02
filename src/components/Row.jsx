import React, { useEffect, useState } from "react";
import axios from "../axios.js";
import "./styles/Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

     useEffect(()=>{
         const fetchData = async()=>{
              const request = axios.get(fetchURL);
              const data =  (await request).data.results;
              setMovies(data)
           console.log(data);
              return request
          }
          fetchData()
     },[fetchURL])

  let key = 0;
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters_container">
          {movies.map((movie) => (
            <img
              className="row_poster"
              key={key++}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;

//await => wait for the promise to come back the answer to
// come back and then do something

/* 
whenever you use anything inside of the useEffect 
if there is any variable that is pulled in from outside(another component)
use that inside of the dependacy array  
so that the useEffect knows whenever something change 
I need to refire the  code 
*/
