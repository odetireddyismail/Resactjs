import React,{useState} from 'react'

const Child = (props) => {

    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
 
  
    const func=()=>{
         
        const data={name,pass}

        props.passing(data);
       // console.log(data)
       }

    //console.log(name)
  return (
    <div>
        <h1>Child Component</h1>
        
       
        <label>Name:</label>
        <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}}></input><br></br>
        <label>Password</label>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}></input><br></br><br></br>
       <button onClick={func}>Button</button>
    </div>
   
  )
}

export default Child