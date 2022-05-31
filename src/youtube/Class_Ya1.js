import React, { Component } from 'react'
import axios from 'axios'
export default class Class_Ya1 extends Component {

  constructor(){
    super();
    this.state={
       a:[]
    }
    console.log(this.state.a)
    //this.Playlist()
  }
 
 
   
 componentDidMount = () => {

axios.get("https://www.googleapis.com/youtube/v3/playlists", {
    params: {
        part: "snippet",
        channelId: "UCdjWQRQQzlW78u7uEPa4pxA",
        key: "AIzaSyBjQXTvSGCNXu6HfZzDVNFoD4NYnmDKAKg",
    },
})
    .then((res) => {
        
      //let b=res.data.items
      this.setState({
         a:res.data.items
       })
       // console.log();
    })}
  
 

  render() {
    return (
      <div>Class_Ya1</div>
    )
  }
}
