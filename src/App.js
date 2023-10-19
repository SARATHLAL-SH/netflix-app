import React from "react";
import "./App.css";
import Rowpost from "./Components/Rowpost/Rowpost";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import { action, originals, upcoming, topRated } from "./Urls";
import { API_KEY, baseUrl } from "./Constants/Constants";
import { useState } from "react";



function App() {
  const [message, setMessage] = useState("");
  // const[searchValue, setSearchValue]=useState('');

  const receiveMessageFromChild = (messageFromChild) => {
    setMessage(messageFromChild);
  };
  console.log(message);
  return (
    <div className="App">
     
            
      <Navbar sendData={receiveMessageFromChild} />
      <Banner />
      <Rowpost url={originals} title="Netflix Orginals" /> 
      <Rowpost url={action} title="Action Movies" isSmall />
      <Rowpost url={upcoming} title="Upcoming" isSmall />
      <Rowpost url={topRated} title="Top Rated" isSmall />

      <Rowpost 
        url={`${baseUrl}/search/movie?query=${message}&api_key=${API_KEY}`}
      
        title={`${baseUrl}/search/movie?query=${message}&api_key=${API_KEY}`.length > 0 ? "Search Result" : ""}
      /> 

    </div>
  );
}

export default App;
