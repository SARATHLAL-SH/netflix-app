import React, { useEffect, useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const mail = localStorage.getItem("email");
  const [username, setuserName] = useState(mail);
  const [datas, setdatas] = useState([]);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setdatas(response.data);
    });
  }, []);
  const signupHandler = () => {
    navigate("/signup");
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    if (
      datas.some(
        (data) => data.email === username && data.password === password
      )
    ) {
      navigate("/home");
    } else {
      alert("user not exist");
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupNav">
        <img
          alt="logo"
          className="signupLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        />
        <h2 className="signupSingin" onClick={signupHandler}>
          Sign Up
        </h2>
      </div>
      <div className="sigUpWrapper">
        <div className="signupMembership">
          <h2>Sign In Here</h2>

          <input
            type="text"
            placeholder=" Eneter your Email"
            className="signinEmail"
            value={username}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            required
          ></input>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="signinpassword"
            required
          />
          <br />
          <br />
          <button onClick={signInHandler} className="signupBtn">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
