import React, { useContext, useState } from "react";
import "../styles/Login.css";
import Navbar from "../dashBoard/navbar/Navbar";
import AuthContext from "../context/AuthContext"
import {Link, useNavigate} from "react-router-dom"


const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate()
  
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")?
    JSON.parse(localStorage.getItem("loginData")):
    null
  )

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleLogin = async(googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body : JSON.stringify({
        token:googleData.tokenId
      }),
      headers:{
        'Content-Type':"application/json"
      }
    })

    console.log(googleData)
    
    const data = await res.json();
    setLoginData(data)
   
    setIsAuth(true)

    localStorage.setItem("loginData", JSON.stringify(data));
    

    navigate("/dash-board")
  };

  const handleFailure = (res) => {
    console.log(res);
    console.log("login failed");
  };

  const handleLogOut = () => {
    alert("You have signed out successfully");
    localStorage.removeItem("loginData");
    localStorage.removeItem("movieId");
    setIsAuth(false)
    setLoginData(null)
  };

  return (
    <>
      <div className="main_container">
       
     
         <div className="modal">
         {
            loginData?
            (<>
            <h3 className="bottom_margin">You are Logged in as {loginData.email}</h3>
            <div>
              <button className="log_out_btn" onClick={handleLogOut}>Log Out</button>
            </div>
            </>):
            (<>
            <h1 className="bottom_margin">Unlimited Movies, TV Shows and More</h1>
            <h3 className="bottom_margin">Watch anywhere Cancle anytime</h3>
              <div>
               <Link to="/login-register">
               <button className="btn login_redirect_btn">Finish Sign Up </button>
               </Link>
            </div>
            </>
            )
          }
         
         </div>
       
      </div>
    </>
  );
};

export default Login;
