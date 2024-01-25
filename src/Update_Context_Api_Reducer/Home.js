import React, { createContext } from 'react'
import { NavLink } from 'react-router-dom'

const Context_api=createContext()

const Home = () => {

    const data={
        name:'ismail',
        lname:'reddy'
    }
  return (
    <div>
         <h3><NavLink to='/about'>About</NavLink></h3>

         <Context_api.Provider value={data}>

         </Context_api.Provider>
        <h1>Home</h1>
    </div>
  )
}

export  {Home}