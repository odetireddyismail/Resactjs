import React from 'react'
 import { Com } from './Common'
const Button_Com = () => {
  return (
    <Com.Consumer>
        {
            ({updateColor})=>(
                <button onClick={()=>updateColor('gray')}>Button</button>
            )
        }
    </Com.Consumer>
  )
}

export default Button_Com