import React from 'react'
import './sass/DashNav.css'
import { FiSearch } from "react-icons/fi";
import { IoMailOutline,IoNotificationsOutline } from "react-icons/io5";
import Avatar from '../../../assests/Images/avatar.svg'
const DashNav = () => {
  return (
    <div className='dashnav'>
        <div className='searchbar'> <FiSearch/><input placeholder='search...' type='text' name='search'/></div>
        <div className='Sidenav'>
       <span><  IoNotificationsOutline className='icondashnav'/> <p className='count'>2</p></span>
        <span><IoMailOutline className='icondashnav'/><p className='count'>2</p></span>
        <span className='profileinfo'> <h5>Drey Grafield </h5> <p>View Profile</p></span>
        <span><img src={Avatar} alt='avatar'/> </span>

        </div>
    </div>
  )
}

export default DashNav