import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components.jsx/Navbar.jsx/Navbar";
import Banner from "./Components.jsx/Banner/Banner";
import Rowpost from "./Components.jsx/Rowpost/Rowpost";
import { action, originals, upcoming, topRated, movieSearch } from "./Urls";
import { useState } from "react";
import { API_KEY, baseUrl } from "./Constants/Constants";
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
        title="Search Result"
      />
    </div>
  );
}

export default App;
