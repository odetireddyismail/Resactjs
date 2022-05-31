import React,{useState} from 'react';

const Functional_Event = () => {

    const [data,setData]=useState("Hallow this is data");
    const [count,setCount]=useState(0);
    const [array,setArray]=useState({name:"Hallow",many:"no"
    });

    const handle=()=>{
    setData("Hallow this Ismail")
    }

    const change=()=>{
      
         setCount(count+1);
    }

    const Array=()=>{
        setArray({name:"Reddy",many:"Ismail"})
    }



  return (
    <div>

    <h1>{data}</h1> 
    <h3>{count}</h3>
    <h3>{array.name}{array.many}</h3>

    <button onClick={handle}>Change</button> 
    <button onClick={change}>Count</button> 
    <button onClick={Array}>Change the name</button>
    </div>
  );
};

export default Functional_Event;
