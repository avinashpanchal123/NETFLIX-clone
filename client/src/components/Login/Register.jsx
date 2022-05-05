import React, { useState } from "react";

// import {storeUser} from "../../redux/users/actions"
import axios from "axios";
import uuid from "react-uuid";

let initState = {
  name: "",
  email: "",
  password: "",
};

const Register = ({ handleModal }) => {
  const [userData, setUserData] = useState(initState);


  let { name, email, password } = userData;




  // console.log(loggedUsers);

  const createUser = (userData) => {
    axios
      .post("http://localhost:5000/register", {
        name : name, email:email, password:password
      })
      .then((resp) => {
        let data = resp;
        console.log(data);
        setUserData(initState)
       
      })
      .catch((error) => {
        console.log(error);
        alert("User Alredy Exist")
        setUserData(initState)
      });
//     fetch('http://localhost:5000/register', {
//   method: 'POST',
//   mode: 'cors',  
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(userData),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userData);
    createUser(userData)
    
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    let newUserData = { ...userData, [name]: value };

    setUserData(newUserData);
    // console.log(userData);
  };

  
  return (
    <>
      <form action="">
        <div className="login_input_div">
          <input
            className="login_input"
            type="text"
            name="name"
            maxLength="8"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter a UserName"
          />
        </div>
        <div className="login_input_div">
          <input
            className="login_input"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter Your Email Id"
          />
        </div>
        <div className="login_input_div">
          <input
            className="login_input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter  Password"
          />
        </div>
        <div>
          <button onClick={handleRegister} className="btn Register_btn">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
