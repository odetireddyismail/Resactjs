import React, { useEffect,useState} from 'react';
//import './App.css';
const Fetch = () => {
   
    const [form,setForm]=useState([])
   useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((result)=>{result.json()
        .then((data)=>{
            //console.log(data);
                setForm(data)
        })
    })
   },[])
console.log(form)  
       return(
       
          <table border="1px solid black"> 
               <tbody>
               <tr>
                   <th>ID</th>
                   <th>Fname</th>
                   <th>Lname</th>
                   <th>Email</th>
                   <th>Pno</th>
                   <th>Delete</th>
               </tr>
               {form.map((da,hi)=>
               <tr key={hi}>
                   <td>{da.id}</td>
                   <td>{da.fname}</td>
                   <td>{da.lname}</td>
                   <td>{da.email}</td>
                   <td>{da.pno}</td>
                   <button value="button" onClick>Delete</button>
               </tr>)}
           </tbody>
          </table>
    )
};

export default Fetch;
