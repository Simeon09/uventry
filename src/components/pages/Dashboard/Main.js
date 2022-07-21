import React from 'react'
import './Main.css'
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from './Home'
import InnerContent from './InnerContent'
import Settings from './Settings'
const Main = () => {
  return (
   <Routes>
         <Route path='/' element={< InnerContent />}/>
        <Route path='/*' element={< Navigate replace to= 'Home'/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Settings' element={<Settings/>}/>

   </Routes>
  )
}

export default Main