import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

function Signup() {
  const [username, setuserName] = useState("");
  const [mobile, setmobile] = useState();
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/data", {
        email: emailValue,
        name: username,
        phone: mobile,
      });
    } catch (error) {
     console.error("Error storing data:", error);
    }
  };
  const emailValue = localStorage.getItem("email");
  return (
    <div>
      <h4>email</h4>
      <input type="text" value={emailValue} className="signupEmail" />
      <h4>Name</h4>
      <input
        className="signupName"
        value={username}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      ></input>
      <h4>mobile</h4>
      <input
        type="number"
        value={mobile}
        onChange={(e) => {
          setmobile(e.target.value);
        }}
        className="signupPhone"
      />
      <br />
      <br />
      <button onClick={signupHandler} className="signupBtn">
        Sign up Here
      </button>
    </div>
  );
}

export default Signup;
