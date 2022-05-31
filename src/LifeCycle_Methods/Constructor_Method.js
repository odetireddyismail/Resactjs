import React, { Component } from 'react';

export default class Constructor_Method extends Component {

    constructor(){
        super()

        //First it will Executed (Constructor)
        
      this.state={
          name:"Constructor"
      }
      console.warn(this.state.name) ;
    }

  render() {

       //Second it will Executed (Render)

    console.log('this is Render');
    return (
    <div>
        
    </div>
    );

  }
}
