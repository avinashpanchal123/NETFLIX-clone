import React,{useState} from "react";
import axios from "../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";


const Movie = ({showTrailerHandler, movie, isLargeRow }) => {
    const [trailer, setTrailer] = useState(false)
    const playTrailer= async()=>{
        const request = await axios.get(`movie/${movie?.id}?api_key=d8d01a05f86a4da428034a687a0beea4&append_to_response=videos`);
        const data = await request.data.videos;
        let trailerId = (data?.results[0].key)
        if( trailerId){
          showTrailerHandler(trailerId)
        }
        else{
          alert("This movie has no Trailer")
        }
    }

   
  return (
    <>
      <img
      onClick={playTrailer}
        className={`row_poster ${isLargeRow && "large_poster"}`}
        key={movie.id}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.title}
      />
    </>
  );
};

export default Movie;
