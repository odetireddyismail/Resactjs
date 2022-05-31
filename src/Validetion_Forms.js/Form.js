import React,{useState} from 'react'
import Form1 from './Form1'
const Form = () => {

    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [pass,setPass]=useState("")
     const [error,setError]=useState()
   
    const submit=(e)=>{

       
       (fname==="" || lname==="" || pass==="")?
           alert("please fill the blank")
           : setError({
             fa:fname,
             fb:lname,
             fc:pass
           })   
         e.preventDefault()
    }                                               
    console.log(error)
    
    //onSubmit={()=>submit()}
  
  return (  
    <div>
        <h5><b>FName:</b>{fname}</h5>
        <h5>Name:<b>Name:</b>{lname}</h5>
        <h5><b>password</b>{pass}</h5>
       <form  onSubmit={submit}>
       <h1><i>Validetion_Forms</i></h1>
        <p><label>First_Name</label></p>
        <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
        <p><label>last_Name</label></p>
        <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}></input>
        <p><label>Password</label></p>
        <input type="password"  value={pass} onChange={(e)=>setPass(e.target.value)}></input><br/><br/>
        <p><input type="submit"></input></p>

       </form>
       <Form1/>
    
    
    </div>
  )
}
export default Form