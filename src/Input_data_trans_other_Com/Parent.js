import React,{useState} from 'react'
import Child from './Child'

//Here I am Passing data to another component li 
const Parent = () => {

  

  const [da,setDa]=useState('')

   const Ismail=( hi)=>{
   
    setDa(hi.name)

   }
      
     //console.log(props.passing)
  return (
    <div>
      {da}
       <Child   passing={Ismail} />
    </div>
  )
}

export default Parent