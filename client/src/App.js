import React from "react";
import DashBoard from "./components/dashBoard/DashBoard";
import Login from "./components/Login/Login";
import { Routes, Route, Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/dash-board" element={<DashBoard />}></Route>
      </Routes>
    </>
  );
};

export default App;
