import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const Routeing = () => {
  return (
    <div>
      <Router>
        <Link to="/home">Home</Link><br />
        <Link to="/header">Header</Link><br />
        <Link to="/Section">Section</Link>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/Section" element={<Section />}></Route>
        </Routes>
      </Router>
    </div>
  )
};
const Home = () => {

  return (
    <div>
      <h1>Home Page 1</h1>
    </div>
  )
}
const Header = () => {
  return (
    <div>
      <h1>Header Page 1</h1>
    </div>
  )
}
const Section = () => {
  return (
    <div>
      <h1>Section  Section
        this is the monitaring
      </h1>
    </div>
  )
}

export default Routeing