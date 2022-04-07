import React from "react";
import {useNavigate} from "react-router-dom"

const MovieList = ({ movie }) => {
  console.log(movie);
  let { id, title } = movie;

  const navigate = useNavigate();

  const gotoDetailsPage = ()=>{
      let movieId = JSON.parse(localStorage.getItem("movieId"));
      if( movieId === null){
          localStorage.setItem("movieId", JSON.stringify(id))
      }
      else{
         localStorage.removeItem("movieId");
         localStorage.setItem("movieId", JSON.stringify(id))
      }
      navigate("/movie-details")
  }
  return (
    <>
    <p  className='small_margin query_results' onClick={gotoDetailsPage}>{title}</p>
    </>
  );
};

export default MovieList;
