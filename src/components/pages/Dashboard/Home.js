import React from 'react'
import DashNav from './DashNav/DashNav'
import './home.css'
import cross from '../../assests/Images/cross.svg'
import history from '../../assests/Images/History.svg'
import product from '../../assests/Images/New Product.svg'
import shipped from '../../assests/Images/Shipped.svg'


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
          <span className='delivery'><small><img src={history} alt='history'/></small> <p>Required Invoice <br /> <span>10</span> </p> </span>
          <span  className='delivery'> <small><img src={product} alt='history'/></small> <p>Required packing <br /> <span>5</span></p></span>
          <span  className='delivery'> <small><img src={shipped} alt='history'/></small> <p>Required Delivery <br /> <span>3</span></p></span>
        </div>
       </div>
    </div>
  )
}

export default Home