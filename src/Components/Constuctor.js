import React, { Component } from 'react'

class Constructor_method extends React.Component{

    //Class Component
    
    constructor(){
        super()
        this.state={
            person:[
                {
                fName:"Constructor",
                middleName:"Method"
                },
            {
                Name: "John",
                lName: "Doe",
                id: 5566,
                
              }
            ]
        }
    }

    

    render(){
        return(
            <div>
                <h1>Hallow  this is Constructor Method</h1>

                <p>Another Method</p>
                <h1>{this.state.person[0].fName}</h1>
                <h1>{this.state.person[0].middleName}</h1>

                <h1>{this.state.person[1].Name}</h1>
                <h1>{this.state.person[1].lName}</h1>
                <h1>{this.state.person[1].id}</h1>

                <p>By Using Map method</p>
                {this.state.person.map((items)=><Data_Passing1 person={items}/>)}
                
            </div>
        )
        }
    }

     //Another one we Created The Class functional Component

     class Data_Passing extends React.Component{

        render(){

            return(
                <div>
                        <h1>Hallow this 2</h1>
                     
                </div>
            )

        }
    }

            //Another one we create the Class  functional Component
    class Data_Passing1 extends React.Component{

        render(){

            return(
                <div>
                        <h1>{this.props.person.fName}</h1>
                        <h1>{this.props.person.middleName}</h1>
                       
                </div>  
            )

        }
    }


export default Constructor_method