import React from 'react'
//import Table from 'react-bootstrap/Table'
import Reusable_Component from './Reusable_Component'

//Nested Means to creat Parent Under Child Creat

const Nested_A_L = () => {


const data=[
    {name:"Reddy",Email:"reddyismail1223@gmail.com",Address:[

        {Hno:"1-1791/1",city:"Hydarabad",Country:"America"},
        {Hno:"1-1791/2",city:"Hydarabad",Country:"America"},
        {Hno:"1-1791/5",city:"Hydarabad",Country:"America"}
    ]},
    {name:"Odeti",Email:"Odetiismail1223@gmail.com",Address:[

        {Hno:"1-171/1",city:"Kadapa",Country:"India"},
        {Hno:"1-171/h",city:"Kadapa",Country:"India"},
        {Hno:"1-171/k",city:"Kadapa",Country:"India"}
    ]},
    {name:"Ismail",Email:"Ismail1223@gmail.com",Address:[

        {Hno:"1-17/k",city:"Chittoor",Country:"Kenada"},
        {Hno:"1-17/km",city:"Chittoor",Country:"Kenada"},
        {Hno:"1-17/kj",city:"Chittoor",Country:"Kenada"}
        
    ]}
]
  return (
    <div>Nested_A_L
       {/* <Table striped bordered hover variant="dark" >
           <tbody border={"1px solid red"}>
               <tr  >
                   <th>Name</th>
                   <th>Email</th>
                   <th>Address</th>
               </tr>
                {
                data.map((item,i)=>
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.Email}</td>
                   <td>
                       <Table variant="dark" striped > <tbody>{item.Address.map((da,k)=>
                      
                   <tr key={k}>
                       <td>{da.Hno}, </td>
                       <td>{da.city},</td>
                       <td>{da.Country}</td>
                       </tr>
                       )}
                       </tbody>
                    </Table>
                   </td>
                </tr>)
               }
           </tbody>
       </Table> */}


      
        <Reusable_Component Name={data}/>
      
    </div>
  )
}

export default Nested_A_L