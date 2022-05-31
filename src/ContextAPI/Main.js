import React from 'react'
import { Com } from './Common'

const Main = () => {
  return (
    <Com.Consumer>
       
        {
            ({color})=>(
                <h1 style={{backgroundColor:color}}>Hallow world this is Main Component</h1>
            )
        }
    </Com.Consumer>
  );
}

export default Main