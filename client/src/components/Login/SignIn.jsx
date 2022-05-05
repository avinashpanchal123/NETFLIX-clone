import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


let initState = {
  email: "",
  password: "",
};


const  Login = ({handleModal})=> {
  const [usersData, setUsersData] = useState("");


  const [loginInfo, setLoginInfo] = useState(initState)
  let {email, password} = loginInfo;


  const navigate = useNavigate()


  const getUsersData = async()=>{
    let res = await  axios.get("");
    let data = res.data;
    setUsersData(data)
    
  }

  

  const handleLogin = async(e)=>{
    e.preventDefault();
    console.log("email" , email);

    console.log("password", password);
    
    axios
    .post("http://localhost:5000/login", {
     email ,
     password
    })
    .then((resp) => {
      let data = resp.data;
      console.log(data);
    
      localStorage.setItem("current_user", JSON.stringify(data.user));
     setLoginInfo(initState)
     navigate("/dash-board")
    })
    .catch((error) => {
      console.log(error);
      alert("Invalid email and Password")
    });
  }
  


  const handleChange = (e)=>{
    let {name, value} = e.target;

    let user = {...loginInfo, [name] : value};
    setLoginInfo(user)
  }
  return (
    <>
     <form action="">
     <div className='login_input_div'>
     <input
       className='login_input'
        type="text" 
        value={email}
        name="email"
        onChange={handleChange}
        autoComplete='off'
        placeholder='Enter Your Email Id'
        />
     </div>
      <div className='login_input_div'>
      <input
         className='login_input'
        type="password" 
        value={password}
        name="password"
        onChange={handleChange}
        placeholder='Enter Your  Password'
        />
      </div>
      <div>
        <button 
        onClick={handleLogin}
        className='btn login_btn'>Login</button>
      </div>
     </form>
    </>
  )
}

export default Login