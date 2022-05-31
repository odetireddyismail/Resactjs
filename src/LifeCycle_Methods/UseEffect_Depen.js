import React,{useEffect, useState} from 'react'

const UseEffect_Depen = () => {

const[data,setData]=useState(0)
const[count,setCount]=useState(100)


useEffect(()=>{

    console.log("Hi UseEffect Calls Data")

},[data]);

useEffect(()=>{

    console.log("Hi UseEffect Calls Count")

},[count])


  return (

    <div>
        <h1 style={{color:"red",backgroundColor:"gray"}}>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setCount(count+1)}>Count</button>
    </div>

  )
}

export default UseEffect_Depen