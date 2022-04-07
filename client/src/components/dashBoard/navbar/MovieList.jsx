import React from "react";

const MovieList = ({ movie }) => {
  console.log(movie);
  let { id, title } = movie;

  const gotoDetailsPage = ()=>{
      let movieId = JSON.parse(localStorage.getItem("movieId"));
      if( movieId === null){
          localStorage.setItem("movieId", JSON.stringify(id))
      }
      else{
         localStorage.removeItem("movieId");
         localStorage.setItem("movieId", JSON.stringify(id))
      }
  }
  return (
    <>
    <p onClick={gotoDetailsPage}>{title}</p>
    </>
  );
};

export default MovieList;
