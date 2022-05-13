import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import "../styles/MovieDetails.css";
import YouTube from "react-youtube";
// import {uuid} from "uuid"

const base_url = "https://image.tmdb.org/t/p/original/";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState("");
   const [showtrailer, setShowTrailer] = useState(false)
  // const [posterURL, setPosterURL] = useState("")
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  let movieId = JSON.parse(localStorage.getItem("movieId"));
  let userData = JSON.parse(localStorage.getItem("loginData"));

  const navigateEffect = useEffect(() => {
    if (movieId == null && userData == null) {
      console.log("user is not authenticated");

      navigate("/");
    } else if (movieId == null) {
      navigate("/dash-board");
    } else {
      const getData = async () => {
        const request = await axios.get(
          `movie/${movieId}?api_key=d8d01a05f86a4da428034a687a0beea4&append_to_response=videos`
        );
        const data = await request?.data;
        setMovieDetails(data);
        console.log(data);
        //  let movieTrailers = data.videos;
        // let poster_url = data.poster_path;
        // console.log(poster_url)
        // setTrailers(movieTrailers);
        // setPosterURL(poster_url)
      };
      getData();
      setShowDetails(true);
    }
  }, []);
  console.log(movieId);
  console.log(movieDetails);

 const showTrailerHandler = ()=>{
     if( showtrailer === true){
        setShowTrailer(false)
     }
    else{ setShowTrailer(true)}
 }


 function addToList(){
   console.log(movieDetails);
 }

 const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      origin: 'http://localhost:3000' 
    },
  };

  return (
    <div className="details_page">
      {showDetails ? (
        <div className="main_div">
          <div className="poster_div">
            <img onClick={showTrailerHandler}
             src={`${base_url}${movieDetails?.poster_path}`}
              alt="" />
          </div>
          <div className="details_div">
            <h1 >{movieDetails?.title} </h1>
            <h6 className="bottom_margin">{movieDetails?.original_title}</h6>
            <p className="bottom_margin">{movieDetails?.overview}</p>
            <div className="bottom_margin">Release Date : {movieDetails?.release_date}</div>
            <div className="bottom_margin">Original Language : {movieDetails?.original_language}</div>
            {/* {
                movieDetails?.genres?.map((el)=>{
                    return <span>{el?.name}{" "}{" "}</span>

                })
            } */}
            <div>
              <button onClick={addToList}>Add to List</button>
            </div>
          </div>
        </div>
      ) : null}

      {

          movieDetails.videos?.results?.length > 0 && showtrailer ?
         ( <YouTube className="youTube" videoId={movieDetails.videos.results[0].key} opts={opts} />):
         null
      }
    </div>
  );
};

export default MovieDetails;
