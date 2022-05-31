import React from "react";

const Props1=(p)=>{
//Object
     /*  const Array= {
        n1:"Odeti",
        n2:"Reddy",
        n3:"Ismail"
           } */
        console.log(p);

    return(
       
        <div style={{backgroundColor:"orange",border:"1px solid black"}}>
           <h2>Hallow this Props1</h2> 
           <h2>{p.fName}</h2> 

           <h2>Array: {Array.n1}</h2> 
           <h3>Array: {Array.n2}</h3>
           <h4>Array: {Array.n3}</h4>
         
        </div>
    )


 

}

 
//APP.jsx   
// <Props1 Address={{Email:"reddyismail1223@gmail"}} />
// <Props1 fName="hallow"/>

export default Props1