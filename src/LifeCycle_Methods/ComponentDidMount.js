import React, { Component } from 'react';

export default class ComponentDidMount extends Component {

    constructor(){
        super()
        console.log('Constructor')
        this.state={
            Hallow:""
        }
    }                       //Close the constructor

    componentDidMount(){

         console.log('componentDidMount')
    }
                          //Close  componentDidMount
  render() {

    console.log('Render')

    return (
    <div>
        <h1>{this.state.Hallow}</h1>
   <button onClick={()=>this.setState({Hallow:"This is update"})}>Update</button>
    </div>);
  }                          //Close Render
}

//Example is API call
//HTML dependency 
//When the HTML Component is ready 
//Its not working on Component Update
//The componentDidMount() method is called after the component is rendered.

//Output
//Constructor
//Render
//ComponentDidMount
//Again only Render