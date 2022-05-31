import React, { Component } from 'react'

export default class Studet_for_Unmount extends Component {
    componentWillUnmount(){
        alert(" Call the ComponentWillUnmount")
    }
  render() {
    return (
      <div><h1>Studet_for_Unmount</h1></div>
    )
  }
}
