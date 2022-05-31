import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import '../App.css'
//import InputGroup from 'react-bootstrap/InputGroup'


const Input = (props) => {
 
    //console.log(props.pass.sea)
    const [search, setSearch] = useState("");

    const handleSubmit=(e)=>{
    // e.eventPreventDefault() ;
       props.pass(search)
       //console.log(search)
   
  }
  //console.log(search)

   const button=()=>{
    handleSubmit()
   }
  return (
    <div className='Input'>
        <input className="input"
        placeholder="Enter Post Title"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <Button variant="primary"type="submit" onClick={button} >Search</Button>
    </div>
  )
}

export default Input