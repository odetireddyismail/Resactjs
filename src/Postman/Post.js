import React, {useState } from 'react';
import './Post.css'

const Post = () => {
    const [fname,setFname] =useState("")
    const [lname,setLname] =useState("")
    const [email,setEmail] =useState("")
    const [pno,setPno] =useState("")
    const[req,setReq]=useState([])

    
    function saveUser(){
        
        let data={fname,lname,email,pno}
        //console.log(data);

       fetch('http://localhost:3000/posts',{
           method:"POST",
           headers:{
               'Accept':'Application/json',
               'Content-Type':'Application/json'
           },
           body:JSON.stringify(data)
        }).then((result)=>{
           result.json().then((hi)=>{
               setReq(hi);
           })
        })
    }
    console.log(req);
return (<div>

     <div id="form">
        <label>First name:</label>
        <input type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}}/><br/><br/>
        <label>Last name:</label>
        <input type="text" value={lname} onChange={(e)=>{setLname(e.target.value)}}/><br/><br/>
        <label>Email</label>
        <input type="text" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
        <label>Pno</label>
        <input type="text" value={pno} onChange={(e)=>{setPno(e.target.value)}}/><br/>
        <input type="submit" onClick={saveUser}/>
    </div>
   
     
  </div>);
};

export default Post;
