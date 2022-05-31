import React from 'react'

class Class_function extends React.Component{

    constructor(){
        super()
            this.state={
                fName:"This is Class Component"
            }

        }      //close the Constructor

       
    handle=()=>{
        this.setState({
            fName:"Update the SetState"+this.state.fName
        })
    }
    //Close the handle
    render(){

        return(
            <div>
            <h1>{this.state.fName}</h1>
            <button onClick={()=>this.handle()}>Class button</button>
            </div>
        )
    }
}
export default Class_function