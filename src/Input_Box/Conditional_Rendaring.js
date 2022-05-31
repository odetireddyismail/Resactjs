import React from 'react';
import { useState } from 'react/cjs/react.development';

const Conditional_Rendaring = () => {

    const [name,setName]=useState(false)
    
  return (
  <div>
      {
        name?
        alert('HAllow')
        // {<h1 style={{backgroundColor:"orange" ,textAlign:"center"}}>Ismail</h1>}
        :<h2 style={{backgroundColor:"red",textAlign:"center"}}>Reddy Ismail</h2>
      }
<input  type="submit"onClick={()=>{setName(!name)}} style={{backgroundColor:"black",color:"white",textAlign:"center"}}></input>
     
  </div>
  );
};

export default Conditional_Rendaring;
