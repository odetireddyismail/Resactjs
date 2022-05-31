import React,{useState} from 'react';

const Get_input_box = () => {

const [data,setDate]=useState()
const [print,setPrint]=useState(false)

    const Ismail=(v)=>{
        setDate(v.target.value)
    }

  return (
  <div>
      {
          print?
        <h2> {data}</h2>
         :null
          }
      <label>Name:</label>
      <input type="text" onChange={Ismail}></input><br></br>
      <button onClick={()=>setPrint(true)}>button</button>
  </div>
  );
};

export default Get_input_box;
    