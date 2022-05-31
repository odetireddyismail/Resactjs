import axios from "axios";
import { useEffect, useState } from "react";
import { Play } from "./Opts";

export const List = (props) => {
  const [playListData, setPlayListData] = useState([]);
  const [media, setMedia] = useState("");
  const [listYoutubeVideos, setListYoutubeVideos] = useState([]);

  const handleMediaChange = (e) => {
    let id = e.target.value;
    setMedia(e.target.value);
       
    axios
      .get("https://www.googleapis.com/youtube/v3/playlistItems", {
        params: {
          part: "snippet",
          playlistId: id,
          key: "AIzaSyBjQXTvSGCNXu6HfZzDVNFoD4NYnmDKAKg",
        },
      })
      .then((res) => {
       // console.log(res.data.items);
        setListYoutubeVideos(res.data.items);
      });
  };

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/playlists", {
        params: {
          part: "snippet",
          channelId: "UCdjWQRQQzlW78u7uEPa4pxA",
          key: "AIzaSyBjQXTvSGCNXu6HfZzDVNFoD4NYnmDKAKg",
        },
      })
      .then((res) => {
       // console.log(res.data.items);
        setPlayListData(res.data.items);
      });
  }, []);

  return (
    <div className="container d-flex">
      {
        <div>
          <select
            className="form-select m-4 text-align-center"
            onChange={handleMediaChange}
          >
            <option>selectPlaylist</option>
            {playListData.map((list, i) => {
                console.log(list)
              return (
                <option key={i} value={list.id}>
                  {list.snippet.title}
                </option>
              );
            })}
          </select>
          <Play listYoutubeVideos={listYoutubeVideos} />
        </div>
      }
    </div>
  );
};