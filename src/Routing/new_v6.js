import React from 'react'
//import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
//import './Home'

const Pages = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Link to='/' >Home</Link><br></br><br></br>
      <Link to='/home1' >Home</Link><br></br><br></br>
      <Link to='/home1/home2' >Home</Link>
            <Routes>
              
                    <Route path="/"  exact element={<Home/>}/>
                    <Route path="/home1" element={<Home1/>}/>
                    <Route path="/home1/home2" element={<Home2/>}/>
                
            </Routes>
      </BrowserRouter>
     
      
    </div>
  )
}
export default Pages;

const Home=()=>{
     
    return (<div>
       <h1> Ismail. Home1</h1>
    </div>)
}

const Home1=()=>{
     
    return (
        <div>
            <h1>Ismail Home 2</h1>
        </div>
    )
}

const Home2=()=>{
     
    return (
        <div>
           <h1> Ismail Home 3</h1>
        </div>
    )
}


