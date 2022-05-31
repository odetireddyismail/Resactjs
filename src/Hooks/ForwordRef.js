import React,{useRef} from 'react'
import User1 from './User'

//How to transfer the data from parent to Child Component
//By using the UseRef 

const ForwordRef = () => {

  let inputRef=useRef("")

  const User=()=>{
    console.log('hallow World')
    inputRef.current.value='1000';
    inputRef.current.style.backgroundColor="red"
  }
  return (
    <div>
        <h1>ForwordRef</h1>
        <User1 ref={inputRef}/>
           <button onClick={User}>button</button>
    </div>
  )
}

export default ForwordRef