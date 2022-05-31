import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import User from './User'
const Dyn = () => {
  const user=[
    {id:1,name:"Odeti",email:"odeti1223@gmail.com"},
    {id:2,name:"Reddy",email:"reddy1223@gmail.com"},
    {id:3,name:"Ismail",email:"ismail1223@gmail.com"}
  ]
  return (
    <div>
     <Router>
     <h1><i>Dynamic Routing</i></h1>
      {user.map((item,i)=>
      
      <div key={i}>
        <h3><Link to={'/name/'+item.id+"/"+item.name}>{item.name}</Link></h3>
        <Routes>
          <Route path="/name/:id:name" element={<User/>}></Route>
          </Routes>      </div>)}
     </Router>
    </div>
  )
}

export default Dyn