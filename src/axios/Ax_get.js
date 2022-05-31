import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [data,setData]=useState([])
    
    const Ismail=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{setData(res)

            //console.log(res)
        }).catch((error)=>{alert('hallow ')})
    }
    console.log(data)
  return (                                  
    <div>
      <button onClick={Ismail}>button</button>  
      
      {data.map((item)=><h2>
        {console.log(item)}
      </h2>)}
     
    </div>
  )
}

export default Fetch