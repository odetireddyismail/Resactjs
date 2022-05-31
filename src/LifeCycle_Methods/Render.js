import React, { Component } from 'react';

export default class Render extends Component {

    constructor(){
        super()
        this.state={
           
            //Update value is nothing but 
            //RE-render(Update Value) 
        }
        console.log("constructoro")
    }
    
  render() {

             //First  Render calls <h1></h1>
            //update (setState,state  value)

    console.log('render')
    return (
    <div>
      <h1>Render</h1>
    </div>
    );
  }
}
