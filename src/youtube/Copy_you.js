import React, { useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
//import "./api.css";

function Search() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const opts = {
    height: "390",
    width: "640",

    playerVars: {
      autoplay:1,
      origin: "https://youtube.com",
    },
  };

  const handleSubmit = (e) => {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          type: "video",
          q: search,
          key: "AIzaSyAneun33Vkfj-wMOPAhm_YFDzLXV8SoQ70",
        },
      })
      .then((res) => {
        console.log(res.data.items);
        setItems(res.data.items);
      }).catch((error)=>{
        //console.log(error)
      });
      alert('hallow warld')
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <input
        placeholder="Enter Post Title"
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
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
            <div></div>
          </div>
          // <div className="container" key={val.etag}>
          //   <div className="description">
          //     <h3>{snippet.description}</h3>
          //   </div>
          //   <div className="videos">
          //     <YouTube videoId={id.videoId} opts={opts} onReady={onReady} />
          //   </div>
          // </div>
        );
      })}
    </div>
  );
}

export default Search;