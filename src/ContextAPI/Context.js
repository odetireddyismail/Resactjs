import React from 'react'
import Button_Com from './Button_Com'
import {Com,Array} from './Common'
import Main from './Main'

//import { CommonContext } from './Context_API/CommonContext'
//import Common from './Common'
//Context allows passing data through the component tree 
//without passing props down manually at every level

//Provider
//Consumer 
class Context extends React.Component{
   
constructor()
{
  super()

  this.UpdateColor=(color)=>{
    this.setState({
      color:color
    }) 
  }

  this.state={
    color:'red',
    updateColor:this.UpdateColor
  }

  
}

  render(){

    return(
      <Com.Provider value={this.state}>
           <h1>Hallow Provider</h1>
           <Main/>
           <Button_Com/>
      </Com.Provider>
    )
  }
}



export default Context