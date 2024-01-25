import React, { useState } from 'react'
import './calculater.css'


export const Calculater = () => {

    const[val,setVal]=useState('');

    const[pre,setPre]=useState([]);

     const Change=(e)=>{
       
     setVal (val.concat(e.target.name));

     }
   
     const Clear=()=>{
      setVal('')
     }
 
     const Back=()=>{

      setVal(val.slice(0,-1)); //(0, -1)
     }

     const Result=()=>{

      setVal(eval(val).toString());
     
      setPre([...pre,val]);

      
  
     }



    console.log(pre)

   
  return (  

    <div className='container'>
        {pre.map((i,k)=><span key={k}>{i}={val}<br/><br/></span>)}
       <form>   
        <input type='text' value={val}></input>
       
       </form>
        <div className='co'>
        <button type="button"  className='clear' name="clear"onClick={Clear}>&Clear</button>
        <button type="button" id="c"name="c" onClick={Back}>C</button>
        <button type="button" name="/" onClick={Change}>/</button>
        <button type="button" name="7" onClick={Change}>7</button>
        <button type="button" name="8" onClick={Change}>8</button>
        <button type="button" name="9" onClick={Change}>9</button>
        <button type="button" name="*" onClick={Change}>*</button>
        <button type="button" name="4" onClick={Change}>4</button>
        <button type="button" name="5" onClick={Change}>5</button>
        <button type="button" name="6" onClick={Change}>6</button>
        <button type="button" name="-" onClick={Change}>-</button>
        <button type="button" name="1" onClick={Change}>1</button>
        <button type="button" name="2" onClick={Change}>2</button>
        <button type="button" name="3" onClick={Change}>3</button>
        <button type="button" name="+" onClick={Change}>+</button>
        <button type="button" name="0" onClick={Change}>0</button>
        <button type="button" name="." onClick={Change}>.</button>
        <button type="button"  className="eq" onClick={Result}>=</button>
       
        </div>
    </div>
  )
}

