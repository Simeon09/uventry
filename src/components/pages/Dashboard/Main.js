import React from 'react'
import './Main.css'
import {Routes, Route,Navigate} from 'react-router-dom'
import Home from './Home'
import InnerContent from './InnerContent'
import Settings from './Settings/Settings'
import Buisness from './Buisness/Buisness'
import Items from './Items/Items'
import SalesOrder from './SalesOrder/SalesOrder'
import Bills from './Bills/Bills'
import Invoice from './Invoice/Invoice'
import PurchaseOrder from './Purchase/PurchaseOrder'
import  Report from './Reports/Reports'

const Main = () => {
  return (
   <div className='main'>
       <Routes>
             <Route path='/' element={< InnerContent />}/>
            <Route path='/*' element={< Navigate replace to= 'Home'/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Buisness' element={<Buisness/>}/>
            <Route path='/Items' element={<Items/>}/>
            <Route path='/SalesOrder' element={<SalesOrder/>}/>
            <Route path='/Bills' element={<Bills/>}/>
            <Route path='/Invoice' element={<Invoice/>}/>
            <Route path='/PurchaseOrder' element={<PurchaseOrder/>}/>
            <Route path='/Report' element={<Report/>}/>
            <Route path='/Settings' element={<Settings/>}/>
       </Routes>
   </div>
  )
}

export default Main