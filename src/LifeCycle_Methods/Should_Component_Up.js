import React, { Component } from 'react';

export default class Should_Component_Up extends Component {
   constructor(){
     super()
     this.state={
         count:0
     }
       
     console.log("Constructor")
   }

     //It Stops the rendering Updated value
    //By Default return false in the shouldComponentUpdate
    // We adding shouldComponentUpdate under return true 
    //And also applying Specific condition

  shouldComponentUpdate(){
    console.warn("Should Component Update", this.state.count );
    if(this.state.count>5 && this.state.count<15){
      return true
    }
  }
    
  render() {
    console.log("render")
    return (
    <div>
      <h1>Count:{this.state.count}</h1>
       <button onClick={()=>{this.setState({count:this.state.count+1})}}>button</button>
      
    </div>
        );
  }
  
}




