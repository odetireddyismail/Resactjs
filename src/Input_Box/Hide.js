import React,{useState} from 'react';

const Hide = () => {

 const [hide,setHide]=useState(true);



 const H_S=()=>{
    
    setHide(!hide)
 }

  return (
    <div>

    {
     hide?
     <p>
    React is a JavaScript library for building user interfaces.<br></br>

    React is used to build single-page applications.<br/>

    React allows us to create reusable UI components.
    </p>
    :null  
    }
    {/* <button onClick={()=>{setHide(true)}}>Show</button>
    <button onClick={()=>{setHide(false)}}>Hide</button> */}
    <button onClick={H_S}>Show & Hide</button>
    </div>
    );
};

export default Hide;
