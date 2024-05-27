import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import * as icon from 'react-bootstrap-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='dashboardLayout'>

      <div className='dashboardNavbar'>
        <div className="navbrand">
          <img src="images/logo/logo-white.png" alt="" />
          {sidebarOpen ? <icon.X onClick={toggleSidebar} className='toggle' /> : <icon.List onClick={toggleSidebar} className='toggle' />}
        </div>
        <div className="navRight">
          <div className="icon toggleIcon">
            <img src="images/icon/Vector.png" alt="" onClick={toggleSidebar} />
          </div>
          <div className="searchbar">
            <input type="text" placeholder='Search anything........' />
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
          </div>
          <div className="notif">
            <div className="country">
              <img src="images/icon/flag.png" alt="" />

            </div>
            <div className="globe">
              <icon.Globe />

            </div>
            <div className="notification">
              <icon.Bell />
              <span>5</span>
            </div>
            <div className="messages">
              <icon.Envelope />
              <span>5</span>
            </div>
            <div className="settings">
              <icon.Gear />
            </div>
            <div className="user">
              <div className="image">
                <img src="images/faith.png" alt="" />
              </div>
              <div className="info">
                <div className="name">
                  faith kyra
                </div>
                <div className="position">
                  <span>vendor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboardContent">

        <div className={`dashboardSidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="nav">
            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.ColumnsGap />
              <span>dashboard</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.Handbag />
              <span>orders</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.ShopWindow />
              <span>products</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.Envelope />
              <span>messages</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.People />
              <span>custimers</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.Person />
              <span>account</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.Gear />
              <span>settings</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.QuestionCircle />
              <span>help</span>
            </NavLink>

            <NavLink to='/dashboard' onClick={closeSidebar}>
              <icon.Headset />
              <span>support</span>
            </NavLink>
          </div>
          <div className="logout">
            <NavLink to='/'>
              <icon.BoxArrowLeft />
              <span>Logout</span>
            </NavLink>
          </div>
        </div>

        <div className="dashboardMain">
          <Outlet />
        </div>

      </div>
    </div>
  )
}
