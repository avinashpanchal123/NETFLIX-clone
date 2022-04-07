import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Movie from "./Movie";
import "../styles/Row.css";
import YouTube from "react-youtube";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const request = axios.get(fetchURL);
      const data = (await request).data.results;
      setMovies(data);
      //  console.log(data);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  const showTrailerHandler = (id) => {
    if( showTrailer === true){
      setShowTrailer(false)
    }
    setTrailerId(id);
    setShowTrailer(!showTrailer)
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters_container">
          {movies.map((movie) => (
            <Movie
              showTrailerHandler={showTrailerHandler}
              key={movie.id}
              movie={movie}
              isLargeRow={isLargeRow}
            />
          ))}
        </div>
      </div>
      {showTrailer && 
      <YouTube videoId={trailerId} opts={opts} />
      }
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
