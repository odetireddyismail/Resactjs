import React,{useState} from 'react'
import YouTube from 'react-youtube'
var getYouTubeID = require('get-youtube-id');

const You_Embed_iframe = () => {

    const[data,setData]=useState('')


  const Ismail=(e)=>{
   
    setData(getYouTubeID(e.target.value));
  
  }
  
  const opt={
    
    height:'200px',
    width:'200px',
    playerVars:{

        autoplay:0,
    }

  }
  const onReady = (event) => {
    event.target.pauseVideo();
  } ;

  console.log(data)
  return (
    <div>You_Embed_iframe
        <input 
        type="text" onChange={Ismail}></input>
         <YouTube videoId={data} opt={opt} onReady={onReady} />

    </div>
  )
}

export default You_Embed_iframe