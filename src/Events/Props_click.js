import React,{useState} from 'react';

import Props_Child_Chi from './Props_Click_Chi'

const Props_click = (d) => {

 const [email,setEmail]=useState("reddyismail1223@gmail.com");

 /* const handle=()=>{
  setEmail("Hallow Button")
 } */
  return (
  <div>
      <h1>{d.name}</h1>
     
        <Props_Child_Chi email={email}/>

        <button onClick={()=>{setEmail("Hallow world")}}>button</button>
  </div>
  );
};

export default Props_click;
