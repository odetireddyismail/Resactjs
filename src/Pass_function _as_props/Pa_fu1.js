// props= properties


// const  object={

//     properties(key):"value"
// }


// const p ={

//   name:"Reddy",
//   lName:"Ismail"
   
// }

import React from 'react';

const Pa_fu1 = (p) => {
  
  
  console.log(p);
  return (
  <div>
    
     <h1>Hallow this is function 1</h1>
     <button type="button" onClick={p.name}> button</button>

  </div>
  );
}

export default Pa_fu1;
