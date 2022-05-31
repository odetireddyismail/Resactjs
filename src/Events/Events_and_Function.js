import React from 'react';

const Events_and_Function = () => {


    function Hallow(){
        alert("hallow")
    }

  return (
  <div>
      <button onClick={()=>alert("hallow 3")}>Button</button>
  </div>
  );
};

export default Events_and_Function;
