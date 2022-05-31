import React from 'react'
import Frag_cols from '../Frag_cols'
const Fragm = () => {


    //Uses of Fragment
    //To Remove Multiple Components or Extra div
    //Two ways to use Fragment
    //1. 
    //<React.Fragment>
    // <h1>Hallow Fragment</h1>
    // </React.Fragment>

    //2
    // <Fragment>
    //         <h1>Hallow Fragment</h1>
    //         <h1>Hallow Fragment1111</h1>
    // </Fragment>

  return (
    
       <div>
           <table>
               <tbody>
                   <tr>
                       <Frag_cols/>
                   </tr>
               </tbody>
           </table>
       </div>
   
  )
}

export default Fragm