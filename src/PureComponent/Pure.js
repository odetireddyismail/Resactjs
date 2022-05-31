import React,{ PureComponent } from 'react'

export default class Pure extends PureComponent {

    constructor(){
        super()
        this.state={

        count:1

        }
      
    }
   
  render() {
      console.log('re-render')
    return (
      <div>
         <h1> {this.state.count}</h1>
         <button onClick={()=>this.setState({count:this.state.count+1})}>Button</button>
      </div>
    )
  }
}
