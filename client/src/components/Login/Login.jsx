import React, { useState } from "react";
import "../styles/Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login = () => {
  
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [showLogOutBtn, setShowLogOutBtn] = useState(false);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleLogin = (res) => {
    console.log(res);
    setShowLoginBtn(false);
    setShowLogOutBtn(true)
    console.log("login success");
  };

  const handleFailure = (res) => {
    console.log(res);
    console.log("login failed");
  };

  const onSignOutSuccess = () => {
    alert("You have signed out successfully");
    setShowLoginBtn(true);
    setShowLogOutBtn(false);
    console.clear()
  };

  return (
    <>
      <div className="main_container">
        {/* <div className="modal"> */}
          {showLoginBtn && 
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            />
          }
          {showLogOutBtn && 
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSignOutSuccess}
            ></GoogleLogout>
          }
        {/* </div> */}
      </div>
    </>
  );
};

export default Login;
