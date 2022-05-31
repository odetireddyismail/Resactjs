import React,{useState,useRef, useEffect} from 'react'

const Previous_Props = () => {

 const [count,setCount]=useState(0)


 const Func=()=>{
   
    setCount(count+1)
 }
  return (
    <div>
        <h1><i>Previous_Props</i></h1>
         <User  name={count}/> 

         <button onClick={ Func}>Button</button> 
    </div>
  )
}

const User=(p)=>{
    
    const lastValue=useRef();

    useEffect(()=>{
        lastValue.current=p.name
    })

    const previousValue=lastValue.current
    console.log(p)
    return(
        <div>
            
            <h2>Current_Val={p.name}</h2>
            <h2>Previous_Val={previousValue}</h2>
            
            {/* {[p].map((item,i)=>
            <ul key={i}>
                <li>{item.name}</li>
            </ul>)} */}
            <h3><i>User_Component</i></h3>
        </div>
    )
}

export default Previous_Props