import React, { useContext, useState } from "react";
import "../styles/Login.css";
import Navbar from "../dashBoard/Navbar";
import AuthContext from "../context/AuthContext"
import {useNavigate} from "react-router-dom"
import { GoogleLogin, GoogleLogout } from "react-google-login";

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
    
    const data = await res.json();
    setLoginData(data)
   
    setIsAuth(true)
  
      navigate("/dash-board")
    
    localStorage.setItem("loginData", JSON.stringify(data))
  };

  const handleFailure = (res) => {
    console.log(res);
    console.log("login failed");
  };

  const handleLogOut = () => {
    alert("You have signed out successfully");
    localStorage.removeItem("loginData");
    setLoginData(null)
  };

  return (
    <>
      <div className="main_container">
     
         <div className="modal">
         {
            loginData?
            (<>
            <h3>You are Logged in as {loginData.email}</h3>
            <div>
              <button onClick={handleLogOut}>Log Out</button>
            </div>
            </>):
            (<>
            <h1>Unlimited Movies, TV Shows and More</h1>
            <h3>Watch anywhere Cancle anytime</h3>
              <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login With Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"} />
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
