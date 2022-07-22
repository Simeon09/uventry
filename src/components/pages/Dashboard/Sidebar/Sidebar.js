import React from 'react'
import logo from '../../../assests/Images/uventorylogo.svg';
import './side.css'

import { HiHome,HiUsers,HiTag,HiShoppingCart,HiCreditCard ,HiClipboardList,HiCalendar,HiLogout,HiCog} from "react-icons/hi"


import {Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div> <img src={logo} alt='logo' className='sidebarlogo'/></div>
        <Link className='links' to='/Home'><span><HiHome className='icon'/></span> <p> Dashboard </p></Link>
        <Link className='links' to='/Buisness'><span><HiUsers className='icon'/></span> <p> Business</p></Link>
        <Link className='links' to='/Items'> <span> <HiTag className='icon'/></span> <p>Items</p></Link> 
        <Link className='links' to='/SalesOrder'> <span> <HiShoppingCart className='icon' /></span> <p>Sales Order</p></Link> 
        <Link className='links' to='/Bills'> <span> <HiCreditCard className='icon'/></span> <p>Bills</p></Link> 
        <Link className='links' to='/Invoice'> <span> <HiClipboardList className='icon'/></span> <p>Invoice</p></Link> 
        <Link className='links' to='/PurchaseOrder'> <span> <HiClipboardList className='icon'/></span> <p>Purchase Order</p></Link> 
        <Link className='links' to='/Report'> <span> <HiCalendar className='icon'/></span> <p>Report</p></Link> 
        <Link className='links' to='/Settings'> <span> <HiCog className='icon'/></span> <p>Settings</p></Link> 
        <Link className='links' to='/Login'> <span> <HiLogout className='icon'/></span> <p>Log out</p></Link> 
        
        
        
        
        
        
        
    </div>
  )
}

export default Sidebar