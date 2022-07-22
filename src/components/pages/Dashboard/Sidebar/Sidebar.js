import React from 'react'
import logo from '../../../assests/Images/uventorylogo.svg';
import './side.css'
import Homei from '../../../assests/Images/homeI.svg'
import Buisnessi from '../../../assests/Images/buisnessI.svg'
import Itemsi from '../../../assests/Images/itemsI.svg'
import Sales from '../../../assests/Images/SalesI.svg'
import Bills from '../../../assests/Images/BillsI.svg'
import Invoice from '../../../assests/Images/invoiceI.svg'
import Purchase from '../../../assests/Images/PurchaseI.svg'
import Settings from '../../../assests/Images/SettingsI.svg'
import Report from '../../../assests/Images/ReportI.svg'
import Logout from '../../../assests/Images/logoutI.svg'


import {Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div> <img src={logo} alt='logo' className='sidebarlogo'/></div>
        <Link className='links' to='/Home'><span><img src={Homei} alt='homeicon'/></span> <p> Dashboard </p></Link>
        <Link className='links' to='/Buisness'><span><img src={Buisnessi} alt='businessicon'/></span> <p> Business</p></Link>
        <Link className='links' to='/Items'> <span> <img src={Itemsi} alt='itemsicon'/></span> <p>Items</p></Link> 
        <Link className='links' to='/SalesOrder'> <span> <img src={Sales} alt='Salesicon'/></span> <p>Sales Order</p></Link> 
        <Link className='links' to='/Bills'> <span> <img src={Bills} alt='Billsicon'/></span> <p>Bills</p></Link> 
        <Link className='links' to='/Invoice'> <span> <img src={Invoice} alt='Invoiceicon'/></span> <p>Invoice</p></Link> 
        <Link className='links' to='/PurchaseOrder'> <span> <img src={Purchase} alt='Purchaseicon'/></span> <p>Purchase Order</p></Link> 
        <Link className='links' to='/Report'> <span> <img src={Report} alt='Reporticon'/></span> <p>Report</p></Link> 
        <Link className='links' to='/Settings'> <span> <img src={Settings} alt='Settingsicon'/></span> <p>Settings</p></Link> 
        <Link className='links' to='/Login'> <span> <img src={Logout} alt='Logouticon'/></span> <p>Log out</p></Link> 
        
        
        
        
        
        
        
    </div>
  )
}

export default Sidebar