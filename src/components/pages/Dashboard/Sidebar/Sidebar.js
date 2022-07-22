import React from 'react'
import logo from '../../../assests/Images/uventorylogo.svg';
import './side.css'
import Homei from '../../../assests/Images/homeI.svg'
import Buisnessi from '../../../assests/Images/buisnessI.svg'
import Itemsi from '../../../assests/Images/itemsI.svg'
import {Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div> <img src={logo} alt='logo' className='sidebarlogo'/></div>
        <Link className='links' to='/Home'><span><img src={Homei} alt='homeicon'/></span> <p> Dashboard </p></Link>
        <Link className='links' to='/Buisness'><span><img src={Buisnessi} alt='businessicon'/></span> <p> Business</p></Link>
         <Link className='links' to='/Items'> <span> <img src={Itemsi} alt='itemsicon'/></span> <p>Items</p></Link> 
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div> 
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>
        <div>Sidebar</div>       
        
        
        
        
    </div>
  )
}

export default Sidebar