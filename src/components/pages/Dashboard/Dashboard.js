import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main'
import './Dash.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      
      <Sidebar className='sidebar'/>
      <Main/>
    </div>
  )
}

export default Dashboard