import React,{useState} from 'react'

const Previou_State = () => {
    
const[count,setCount]=useState(0)



 const Func=()=>{

    //  const rand=Math.floor(Math.random()*10)

    //  setCount((pre)=>{
       
    //     console.warn(pre)
        
    //     if(pre-rand<5){
    //         alert('Check')
    //     }
    //     return rand;
    //  })

    for(let i=0;i<5;i++)
    {
        setCount((pre)=>{
            return (pre+1)
        })
    }
 }
  return (
    <div>
          
        <h1><i>Previou_State</i></h1>
        <h1>{count}</h1>
        <button onClick={Func}>Count</button>

    </div>
  )
}

export default Previou_State