import React from 'react'
//import Table from 'react-bootstrap/Table'
const Reusable_Component = (h) => {
     console.log(h)
  return (
    <div>
       {h.Name.map((item,i)=><ul key={i}>
      
           <li>{item.name}</li>
           <li>{item.Email}</li>
           {item.Address.map((da,k)=>
           <ol key={k}>
               <li>{da.Hno}</li>
               <li>{da.city}</li>
               <li>{da.Country}</li>
           </ol>)}
       </ul>)}
    </div>
  )
}

export default Reusable_Component