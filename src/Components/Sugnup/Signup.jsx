import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setuserName] = useState("");
  const [mobile, setmobile] = useState();
  const [password, setPassword] = useState("");
  const signInNavigate = () => {
    navigate("/signin");
  };
  const signupHandler = async (e) => {
    if (username && mobile && password !== "") {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/data", {
          email: emailValue,
          name: username,
          phone: mobile,
          password: password,
        });
        navigate("/signin");
      } catch (error) {
        console.error("Error storing data:", error);
      }
    } else {
      alert("Fill required area");
    }
  };

  const emailValue = localStorage.getItem("email");
  return (
    <div className="signupContainer">
      <div className="signupNav">
        <img
          className="signupLogo" alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        />
        <h2 className="signupSingin" onClick={signInNavigate}>
          Sign In
        </h2>
      </div>
      <div className="sigUpWrapper">
        <div className="signupMembership">
          <h2>Create account to start your membership</h2>
          <p>Just a few more steps and you're done!</p>
          <p>We hate paperwork, too.</p>

          <input type="text" value={emailValue} className="signupEmail" />
          <input
            type="password"
            placeholder=" Create Password"
            className="signupName"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder=" Eneter your Name"
            className="signupName"
            value={username}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            required
          ></input>

          <input
            type="number"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => {
              setmobile(e.target.value);
            }}
            className="signupPhone"
            required
          />
          <br />
          <br />
          <button onClick={signupHandler} className="signupBtn">
            Sign up Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
