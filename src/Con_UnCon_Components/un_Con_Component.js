import React from 'react'

const Un_Con_Component = () => {

//There is input fields which not controlled by state then it is called 
//Un-Controlled Components
//Directly Controlled  by the JavaScript 
//uncontrolled Components are nothing but UseRef

//Input ref

const Ismail=(e)=>{
    e.preventDefault()
}

  return (
    <div>
        <h1>un_Con_Component</h1>
       <form onSubmit={Ismail}>
       <input type="text"></input><br/>
        <input type="text"></input><br/>
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default Un_Con_Component