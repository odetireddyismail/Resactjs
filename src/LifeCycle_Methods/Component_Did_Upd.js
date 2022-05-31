import React, { Component } from 'react';

export default class ComponentDidUp extends Component {

    
    constructor(){
        super()
        console.log('Constructor')
        this.state={
           count:0
        }
        console.log(this.state.count)
       
    }                       //Close the constructor


    // componentDidMount(){

    //      console.log('componentDidMount')
    // }
                          //Close  
                          

    componentDidUpdate(preProps,preState,snapshot){

        // if(this.state.count<20){
        //     this.setState({
        //         count:this.state.count+1
        //     })
        // }
        
         console.log('componentDidUpdate',preState.count,this.state.count)

         if(preState.count===this.state.count){
             alert('Update Values are Same')
         }
         
    }
                          //Close  componentDidMount
  render() {

    console.log('Render')
    //console.log(this.state.count);
    return (
    <div>
        <h1>{this.state.count}</h1>
   {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button> */}
   <button onClick={()=>this.setState({count:1})}>Update</button>
    </div>);
  }                          //Close Render
}   