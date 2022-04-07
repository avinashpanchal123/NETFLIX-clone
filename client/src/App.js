import React from "react";
import DashBoard from "./components/dashBoard/DashBoard";
import Login from "./components/Login/Login";
import MovieDetails from "./components/dashBoard/details/MovieDetails";
import { Routes, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/dash-board" element={<DashBoard />}></Route>
        <Route exact path="/movie-details" element ={<MovieDetails/>}/> 
      </Routes>
    </>
  );
};

export default App;
