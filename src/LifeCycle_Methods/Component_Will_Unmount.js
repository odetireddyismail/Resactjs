import React, { Component } from 'react'
import Studet_for_Unmount from './Studet_for_Unmount'
export default class Component_Will_Unmount extends Component {
    constructor(){
        super()
        this.state={
            show:true
        }
    }
  render() {
    return (
      <div>
           {
        this.state.show ? <div>
            <Studet_for_Unmount/>
            
            </div>:<h1>Component_Will_Unmount1111111</h1>
      }

      <button onClick={()=>this.setState({show:!this.state.show})}>butt0n</button>
      </div>

     
    )
  }
}
