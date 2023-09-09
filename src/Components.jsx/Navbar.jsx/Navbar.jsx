import React, { useContext, useState } from "react";
import "./Navbar.css";
import { API_KEY, baseUrl } from "../../Constants/Constants";
import axios from "axios";
import Rowpost from "../Rowpost/Rowpost";
import context from "../../context/context";

function Navbar({ sendData }) {
  const [search, setsearch] = useState("");
  const [datas, setdatas] = useState([]);
  
  
  const handleClick = () => {
  sendData(search);
  };

 
  return (
    <div className="navbar">
      

      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflixlogo"
      />
      <input
        className="input"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
        type="text"
      ></input>
      <button className="searchBtn" onClick={handleClick}>
        Search
      </button>

      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avtar"
      />
      
    </div>
  );
}

export default Navbar;
