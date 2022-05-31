import React from 'react'

const Declare_a_variable = () => {

   // const user=<h2>this is for</h2>

   


//console.log(user)
    const func=(user)=>{
      
        return console.log(user.fname+' '+user.lname)
       
    }

    const user={
        fname:'reddy',
        lname:'ismail'
    }
  // func(user);

  return (
    <div>
        <h1>Declare_a_variable</h1>
         <i>{user.fname}</i>
        {func(user)}
    </div>
  )
}

export default Declare_a_variable