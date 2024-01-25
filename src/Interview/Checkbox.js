import React, { useState } from "react";

const Checkbox = () => {
  const Games = ["Play Cricket", "Play Volley Ball", "Play Video game"];
  const [data, setData] = useState([]);
  const [arr, setArr] = useState("");
  //   const Change = (e) => {
  //     //console.log([e.target.name]= e.target.value)
  //     setData(e.target.value);
  //   };

  console.log(data);

  const Change = (e) => {
    setData([...data, e.target.value]);
  };

  const Change1=(e) =>{
    setArr(e.target.value)
  }
  const Delete=(e)=>{
     const da=data.filter((item)=>item!=e)
      setData(da)
  }
  //console.log(data)
  return (
    <div>
      {/* {Games.map((item, index) => {
        return (
          <p>
            <input
              type="checkbox"
              name={item}
              value={item}
              onChange={Change}
            ></input>
            {item}
            {item ===data ? <button>Delete</button> : null}
          </p>
        );
      })} */}

      <select onChange={Change}>
        {Games.map((item, index) => {
          return (
            <option ket={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      {data.length == 0 ? (
        <p>Loading . . . . </p>
      ) : (
        data.map((items, index) => {
          return (
            <p>
              <input
                type="checkbox"
                name={items}
                value={items}
                onChange={Change1}
              ></input>
              {items}
              {items===arr?<button onClick={()=>{Delete(items)}}>Delete</button>:null}
            </p>
          );
        })
      )}
    </div>
  );
};

export default Checkbox;
