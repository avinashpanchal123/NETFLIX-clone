import React from "react";
import DashBoard from "./components/dashBoard/DashBoard";
import Login from "./components/Login/Login";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Loading from "./components/loading/Loading";
import LoginRegister from "./components/Login/LoginRegister"
import { Routes, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/dash-board" element={<DashBoard />}></Route>
        <Route exact path="/movie-details" element ={<MovieDetails/>}/> 
        <Route exact path="/loading" element={<Loading/>}> </Route>
        <Route exact path="/login-register" element={<LoginRegister/>}> </Route>
      </Routes>
    </>
  );
};

export default App;
