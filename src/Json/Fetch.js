import React,{useState,useEffect} from 'react'

const Fetch = () => {
 const[data,setData]=useState([])
    
     useEffect(()=>{

      fetch('https://fakestoreapi.com/products')

      .then((h)=>{ h.json()

      .then((k)=>{setData(k)})
             })
     },[])


      console.log(data);
  return (
    <div>Fetch
       {data.map((item,i)=>
      <h1 key={i}>{item.price}</h1>)}
    </div>
  )
}

export default Fetch