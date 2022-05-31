import React,{useState} from 'react';

const Handle_form = () => {
    
    const [name,setName]=useState()
    const [movie,setMovie]=useState()
    const [check,setCheck]=useState(false)
    const [show,setShow]=useState(false)
    
    const read=(f)=>{

         //Object Data
        const re={
            N1:name,
            N2:movie,
            N3:check
        }
        Trans(re);

       // console.log(re)

        f.preventDefault()
      }

      //Another function transforming the data
    const Trans=(h)=>{
            console.log(h);
    }

  return (<div>
     {
      show?
      <form onSubmit={read}>
      <label>Name:</label>
    < input type="text" onChange={(e)=>{setName(e.target.value)}}></input><br/><br/>
    <label>Movie:</label>
    <select onChange={(e)=>{setMovie(e.target.value)}}>
        <option>Marvel Studio</option>
        <option>HollyWood</option>
        <option>Tollywood</option>
        <option>Bollywood</option>
    </select><br/><br/>
    <input type="checkbox" onChange={(e)=>{setCheck(e.target.checked)}}></input>
    <label>Checked:</label><br/><br/>
    <input type="submit"></input> 
      </form>
      :null   
     }
    <button onClick={()=>{setShow(!show)}}>show&hide</button>
  </div>);
};

export default Handle_form;
