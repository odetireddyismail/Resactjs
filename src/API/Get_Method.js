import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
const Get_Method = () => {

    const [data,setData]=useState([])

   useEffect(()=>{
    fetch('http://localhost:3000/posts').then(
        (res)=>{
            res.json().then((da)=>{
                setData(da)
                console.log(da)
            })
        }
    )
   },[])
  return (
    <div>
        <h1><i>Get_Method</i></h1>
        <Table variant="dark">
            
                <tbody>
                  <tr>
                    <th>Id</th>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Email</th>
                    <th>Pno</th>
                  </tr>

                  {data.map((item,i)=>
                  <tr key={i}>
                      <th>{item.id}</th>
                      <th>{item.fname}</th>
                      <th>{item.lname}</th>
                      <th>{item.email}</th>
                      <th>{item.pno}</th>
                  </tr>)}
                </tbody>
                
        </Table>
       
    </div>
  )
}

export default Get_Method