import React, { useState } from "react";
import "./Login.css";
import { bgimage } from "../../Urls";
import axios from "axios";

function Login() {
  const [searchMail, setSearchMail] = useState("");
  const [details, setDetails] = useState([]);
  const validate = () => {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailFormat.test(searchMail)) {
      axios.get("http://localhost:5000/data").then((response) => {
        console.log(details);
        setDetails(response.data);
        if (details.some((detal)=>detal.email===searchMail)) {
          console.log("user Exists");
        } else{
          console.log("user not available");
          localStorage.setItem ('email',searchMail);
        } 
      });
      checkcLocalStorage();
    } else alert("You have entered an invalid email address!");
  };
  const checkcLocalStorage = () => {};
  const options = ["English", "Hindi"];
  return (
    <div className="loginBg" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="bgShade">
        <div className="navContainer">
          <div className="logoDiv">
            <img
              alt="Logo"
              className="loginLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            />
          </div>
          <select className="select">
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button className="loginBtn">Sign In</button>
        </div>

        <h1 className="LoginHead">
          The biggest Indian hits. Ready to watch here from ₹ 149.
        </h1>
        <p className="paraOne">Join today. Cancel anytime.</p>
        <p className="paraTwo">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="searchArea">
          <input
            className="emailSearch"
            value={searchMail}
            onChange={(e) => {
              setSearchMail(e.target.value);
            }}
            type="text"
            placeholder="Email address"
          />
          <button className="strtedbtn" onClick={validate}>
            Get Started {">"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
