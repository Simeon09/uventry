import React  from "react";
import "./sass/DashNav.css";
import { FiSearch } from "react-icons/fi";
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5";
import Avatar from "../../../assests/Images/avatar.svg";
import { FaTimes} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

import { useState } from "react";
const DashNav = () => {
  const [sidebar, setsidebar] = useState(false)
  const showsidebar= ()=>{
    setsidebar(!sidebar)
  }
  return (
    <div>
      <div className="dashboardnav">
        <div>
          <button onClick={showsidebar}>{ sidebar ? <FaTimes/>  : <FaBars/>}</button>
        </div>
        <div className="dashnav">
          <div className="searchbar">
            {" "}
            <FiSearch />
            <input placeholder="search..." type="text" name="search" />
          </div>
          <div className="Sidenav">
            <span>
              <IoNotificationsOutline className="icondashnav" />{" "}
              <p className="count">2</p>
            </span>
            <span>
              <IoMailOutline className="icondashnav" />
              <p className="count">2</p>
            </span>
            <span className="profileinfo">
              {" "}
              <h5>Drey Grafield </h5> <p>View Profile</p>
            </span>
            <span>
              <img src={Avatar} alt="avatar" />{" "}
            </span>
          </div>
        </div>
      
      </div>
      <div className={ sidebar ? 'nav-menu-active' : 'nav-menu'  }>
      <nav onClick={showsidebar}   >
            <Sidebar className='side'/> 
          </nav>
      </div>
    </div>
  );
};

export default DashNav;
