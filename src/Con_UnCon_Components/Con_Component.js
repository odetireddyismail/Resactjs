import React,{useState} from 'react'

const Con_Component = () => {

    //Controlled Components is nothing but when input fields
    //are controlled by State is called controlled Components
    //State through controlled is said to be Controlled Components
    const[val,setVal]=useState('')
   
    return (
        <div>
            <h1>Con_Component</h1>
            <h3>{val}</h3>
            Name:<input type="text" defaultValue='Reddy Ismail' onChange={(e)=>setVal(e.target.value)}></input>
        </div>
    ) 
}

export default Con_Component