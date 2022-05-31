// import React  from 'react'
// class Pr_Class extends React.Component{

//    constructor(p){
//        super(p)

//        this.state= {
//           N1:p.name[0],
//           N2:p.name[1],
//           N3:p.name[2],
//           N4:p.name[3]
         

//          }
//          console.log(this.state.N1)
//         }

//     render(){
//         return(
//             <div>
//                <h2>{this.state.N1}</h2>
//                <h2>{this.state.N2}</h2>
//                <h2>{this.state.N3}</h2>
//                <h2>{this.state.N4}</h2>
//                 <h1>Class Component</h1>
//             </div>
//         )
//     }
// }
// export default Pr_Class

// // p={
// //     name={
// //         h1:"",
// //         h2:"",
// //     }
// // }


//  const Array=["A1","A2","A3","A4"]

import React from 'react';
import Pa_fu1 from './Pa_fu1';
const Pr_Class = () => {

    const fuc=()=>{
        alert('hallow');
    }

  return (
  <div>
  <Pa_fu1 name={fuc}/>
  </div>
  );
};

export default Pr_Class;

