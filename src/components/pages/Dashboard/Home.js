import React from 'react'
import DashNav from './DashNav/DashNav'
import './home.css'
import cross from '../../assests/Images/cross.svg'
const Home = () => {
  return (
    <div className='hom'>
      <DashNav/>
       <div className='content'>
        <div className='firstSection'>
          <span> <p>Dashboard</p> </span>
          <span><div><img src={cross} alt='cross'/></div> <div>New</div></span>
        </div>
        <div>
          <span><small><img src={history} alt='history'/></small></span>
          <span></span>
          <span></span>
        </div>
       </div>
    </div>
  )
}

export default Home