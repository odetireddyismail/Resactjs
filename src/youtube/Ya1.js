import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'
import  '../youtube/Youtube.css'
const Ya1 = () => {

    const [a, setA] = useState([])

    const [b, setB] = useState([])

    useEffect(() => {

        Playlist()

    }, [])

    console.log(b)

    const Playlist = () => {

        axios.get("https://www.googleapis.com/youtube/v3/playlists", {
            params: {
                part: "snippet",
                channelId: "UCHfZtZYMh0G-48v0hvp0jKQ",
                key: "AIzaSyCsFBd5PwQgTLD1oRU49zAMp01O7SXHIpk",
            },
        })
            .then((res) => {
                setA(res.data.items);
                //(res.data.items);
            })

    }
    const PassId = (e) => {

        axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            params: {
                part: "snippet",
                playlistId: e.target.value,
                key: "AIzaSyCsFBd5PwQgTLD1oRU49zAMp01O7SXHIpk",
            },
        })
            .then((res) => {

                setB(res.data.items)

                console.log(res.data.items)
            });
    }

    const opts = {
        height: "80",
        width: "140",
        padding:'2px',
        playerVars: {
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div  style={{backgroundColor:"gray"}}>
            <div>
                <select onChange={PassId}>
                    <option>DropDown</option>
                    {a.map((item, i) => {
                        return (
                            <option key={i} value={item.id}>
                                {item.snippet.title}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className='box'>
                <div>
                    {b.map((d, i) => {
                        return (
                            <div key={i} className='main'>
                                <div key={d.etag} className='youtube'>
                                    <YouTube className='youtube'
                                        videoId={d.snippet.resourceId.videoId}
                                        opts={opts}
                                        onReady={onReady}
                                    />
                                </div>
                                <div className='text'>{d.snippet.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ya1
