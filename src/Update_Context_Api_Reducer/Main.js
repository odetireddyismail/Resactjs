import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Home} from './Home'
import About from './About'
import Error  from './Error'
const Main = () => {


  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/about' element={<About/>}>Home</Route>
            <Route path='*' element={<Error/>}>Home</Route>
        </Routes> 
    </Router>
  )
}

export default Main