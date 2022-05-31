import React from 'react'
import Pre_Array from './Pre_Array'
const Array_object = () => {

    const Obje =[
        {
            firstName: "John",
            lastName: "Doe",
        }
    ]
  return (
    <div>Array_object
        < Pre_Array name={Obje} />
    </div>
  )
}

export default Array_object