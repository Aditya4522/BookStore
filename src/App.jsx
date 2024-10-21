import React from 'react'
import Home from './Home/Home'
import {Route, Routes}from 'react-router-dom'
import Courses from './courses/Courses'
import Siginup from './components/Siginup'
export default function App() {
  return (
    <>
   {/* <Home/>
   <Course/> */}
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/singup' element={<Siginup/>}/>
   </Routes>
    </>
  )
}
