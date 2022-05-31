import React,{useState} from 'react'
import axios from 'axios'
const Main = () => {
 const [data,setData]=useState('')

 const [ap,setAp]=useState([])


const Ismail=()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search`,{
    params:{
part:"snippet",
type:"video",
maxResults:1,
q:data,
key:'AIzaSyCMOW-KF1fvx8GVJ82yMWjRcHX62mPSUG4'
    }
})
.then((res)=>{
   setAp(res)
})
}

 console.log(ap)
  return (
    <div>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>  
      <button onClick={Ismail}>Button</button>
    </div>
  )
}

export default Main