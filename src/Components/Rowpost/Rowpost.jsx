import React, { useEffect, useState, useContext } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import "./Rowpost.css";


import axios from "../../Axios";

import YouTube from "react-youtube";
function Rowpost(props) {
 
  const[isPlaying,setIsPlaying]=useState(true);
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  }, );
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    setIsPlaying(!isPlaying)
    axios
         .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="cardImage"
            key={index}
           
          />
        ))}
      </div>

      {urlId &&  isPlaying && <YouTube videoId={urlId} opts={opts} />}
    </div>
  );
}

export default Rowpost;
