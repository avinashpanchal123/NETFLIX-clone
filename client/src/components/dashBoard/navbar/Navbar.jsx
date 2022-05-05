import React, { useState, useCallback, useEffect } from "react";
import MovieList from "./MovieList";
import { Avatar } from "@mui/material";
import { API_KEY } from "../../../request";
import axios from "../../../axios";
import "../../styles/Navbar.css";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";

const Navbar = () => {
  //  console.log(userData)
  const [query, setQuery] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const searchMovies = (e) => {
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
  };

  useEffect(()=>{
    let current_local_user = JSON.parse(localStorage.getItem("current_user"));
    console.log(current_local_user);
    setAvatar(current_local_user?.name[0].toUpperCase());
  }, [])

  useEffect(() => {
    if (query !== "") {
      const fetchData = async () => {
        const request = axios.get(
          `/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = (await request).data.results;
        console.log(data);
        setMovieList(data);
      };
      fetchData();
    }

  
  }, [query]);

  const changeHandler = (event) => {
    setShowResults(true);
    setQuery(event.target.value);
  };

  const showResultsHandler = () => {
    setShowResults(false);
    setQuery("");
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 3000), []);

  return (
    <>
      <div onClick={showResultsHandler} className="nav">
        <Link to="/dash-board">
          <img
            className="nav_logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix"
          />
        </Link>

        <input
          autoComplete="off"
          onChange={debouncedChangeHandler}
          id="nav_search"
          type="search"
          placeholder="Search"
        />

        {/* <Avatar className='nav_avatar'
       alt="Remy Sharp" src=""/> */}

        <div className="nav_avatar">{avatar}</div>
      </div>
      {showResults && (
        <div className="results_div">
          {movieList.map((movie) => {
            return <MovieList key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
