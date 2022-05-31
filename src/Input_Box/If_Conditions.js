import React,{useState} from 'react';

const If_Conditions = () => {

const [name,setName]=useState("")
const [pass,setPass]=useState("")
const [error,setError]=useState(false)
const [pr,setPr]=useState(false)
    const get=(e)=>{
       
          if(name.length<3||pass.length<3){
              alert('please fill')
          }
          else{
           let m={
               Name:name,
               Pass:pass
           }
           data(m);

          }
            e.preventDefault();
    }


    const data=(t)=>{
         console.warn(t)
    }

//Name Condition
    const Na_Fu=(e)=>{
        let n=e.target.value
       
    if(n.length<3){
        setError(true) 
    }
    else{
        setError(false) 
        setName(n)
    }
    }
 //Password
     const Pa=(e)=>{
        let n=e.target.value
       
    if(n.length<3){
        setPr(true) 
    }
    else{
        setPr(false) 
       setPass(n) 
    }
    }
 
  return (
  <div>
     
     <form onSubmit={get} style={{backgroundColor:"lightgray",textAlign:"center"}}>
     <h3>Login form</h3><br/>
      <label>Name:</label>
      <input type="text" onChange={Na_Fu}></input> <br/>
      {
      error?
      <span style={{color:"red"}}>Please Enter Name</span>
      :""
      }
      <br/>
      <label>Password:</label>
      <input type="password" name="password" onChange={Pa}></input><br/>
      {
      pr?
      <span style={{color:"red"}}>Please Enter Name</span>
      :""
      }<br/>
      <button type="submit">Login </button><br/><br/>
      <h4 style={{color:"blue"}}>{
        name
      }</h4>
       <h4>{
        pass
      }</h4>
     </form>
  </div>
  );
};

export default If_Conditions;
