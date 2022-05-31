import React,{useState} from 'react'

const TimeOut = () => {

    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);


    // const ismail=()=>{
    //     setCount('hallow')
    // }
    setTimeout(()=>{
        setCount(count+1);
        setCount1(count1+5);
    },1000);

  return (
    <div>
        <h1>TimeOut</h1>
        {count}<br></br>
        {count1}
    </div>
  )
}

export default TimeOut
