import React from 'react'
 import Sidebar from './Sidebar/Sidebar'
import Main from './Main'
import './Dash.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      
      {/* <Sidebar className='Sidebar'/> */}
      <Main/>
    </div>
  )
}

export default Dashboard