import React, { useState } from "react";

const CityFilter = () => {
  const [count, setCount] = useState(0);
  const countries = [
    { name: "India", value: "IN", Cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", Cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", Cities: ["Dhaka ", "Chittagong"] },
  ];

  console.log(countries[0].Index);
  const Change = (e) => {
    console.log(e.target.value);
    setCount(e.target.value)
  };

  //   const Array = (d) => {
  //     const Cou = countries.name;
  //   };

  //   const Da = Array(countries);
  return (
    <div>
      <select onChange={Change}>
        {countries.map((item,index) => (
          <option key={index} value={index}>{item.name}</option>
        ))}
      </select>

     <select>
    {countries[count].Cities.map((it,index)=>{
        return <option>{it}</option>
    })}
     </select>
    </div>
  );
};

export default CityFilter;
