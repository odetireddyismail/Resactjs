import React, { Component } from 'react'

export default class Key extends Component {

    constructor(){
        super()
        this.state=[
            {
                firstName: "John",
                 lastName: "Doe",
                 miNa:"ismail",
            }
        ]
    }
  render() {
    return (
      <div>

          {this.state.map((Na,k)=>
          <div >
              <ul>
          <li>{Na.firstName}</li>
         </ul>  
          </div>
         )}



          {/* {this.state[0].firstName}
          {this.state[0].lastName} */}
      </div>
    )
  }
}

//https://fakestoreapi.com/products

// Narendra={

//     firstName: "John",
//     lastName: "Doe",
//     miNa:"ismail",  
// }