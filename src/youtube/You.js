import React, { useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
//import Button from 'react-bootstrap/Button'
import Input from "./Input";
//import InputGroup from 'react-bootstrap/InputGroup'
import '../App.css'
import Para from "./Para";
//@import "~bootstrap/scss/bootstrap";
//import "./api.css";

function Yo() {
  const [items, setItems] = useState([]);
  //const [search, setSearch] = useState("");

  const KEY = 'AIzaSyCMOW-KF1fvx8GVJ82yMWjRcHX62mPSUG4'
  const opts = {
    height: "170",

    width: "250",

    playerVars: {
      autoplay: 1,
      origin: "https://youtube.com",
    },
  };

  const handleSubmit = (Sea) => {
    //console.warn(Sea)
    axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 10,
        q: Sea,
        key: KEY,
      },
    })
      .then((res) => {
        console.log(res.data.items);
        setItems(res.data.items);
      });
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <Input pass={handleSubmit}></Input>

      <div className="map">
        <Para />
        {items.map((val) => {
          const { id, snippet } = val;
          return (
            <div className="conatiner" key={val.etag}>
              <div className="videos">
                <YouTube videoId={id.videoId} opts={opts} onReady={onReady} />
              </div>

              <div className="description">
                <h3>{snippet.description}</h3>
              </div>

            </div>

          );
        })}
      </div>
    </div>
  );
}

export default Yo;