import React, { useEffect, useState } from "react";

//cleanup function
export const UseEff = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    //this is called ComponentDidmount
    window.addEventListener("resize", actualWidth);

    //This is called ComponentunMount
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  }, []);

  return <> {widthCount}</>;
};
