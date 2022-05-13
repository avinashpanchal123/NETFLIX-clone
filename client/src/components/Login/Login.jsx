import React, { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import AuthContext from "../context/AuthContext"
import {Link, useNavigate} from "react-router-dom"


const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate()
  
 useEffect(()=>{
  let current_local_user = JSON.parse(localStorage.getItem("current_user"));
  if( current_local_user){
    navigate("/dash-board")
  }
 })
  

  return (
    <>
      <div className="main_container">
       
     
         <div className="modal">
        <>
            <h1 className="bottom_margin">Unlimited Movies, TV Shows and More</h1>
            <h3 className="bottom_margin">Watch anywhere Cancle anytime</h3>
              <div>
               <Link to="/login-register">
               <button className="btn login_redirect_btn">Finish Sign Up </button>
               </Link>
            </div>
            </>
          
         
         </div>
       
      </div>
    </>
  );
};

export default Login;
