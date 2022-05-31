
import React,{useState} from 'react'

const Higher_order_Component = () => {
  return (
    <div>
        <h1>Higher_order_Component</h1>
       <HOC com={Ismail}/><br/>
        <HOCred com={Ismail}/>
    </div>
  )
}
const HOC=(k)=>{

    return(
        <div style={{backgroundColor:"gray",width:"400px"}}>
            <h2>HOC Gray Counter</h2>
            <k.com/>
        
        </div>
    )
}
const HOCred=(r)=>{

    return(
        <div style={{backgroundColor:"green",width:"400px"}}>
            <h2>HOC Red Counter</h2>
            <r.com/>
        
        </div>
    )
}
                    //Another Component
const Ismail=()=>{
   
    const[count,setCount]=useState(0)
    return(
        <div>
            <h3>Hallow Sub-Component </h3>
           <h3> {count}</h3>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}

export default Higher_order_Component