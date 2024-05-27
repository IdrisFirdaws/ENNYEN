
import React, { useState } from 'react';
import * as icon from 'react-bootstrap-icons'

export default function HomeNavbar({ isTopbarVisible }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // const closeSidebar = () => {
    //     setSidebarOpen(false);
    // };


    return (
        <div className={`homeNavbar ${!isTopbarVisible ? 'TopbarZero' : ''}`}>
            <div className="navbarTop">
                <img src="images/logo/logo-green.png" alt="" className='logo' />
                <div className="searchbar">
                    <input type="text" placeholder='Search ENNYEN...' />
                    <icon.Search />
                </div>
                <div className="navbarRight">
                    <div className="icon">
                        <img src="images/icon/language_icon.png" alt="" />
                        <span>ENG</span>
                    </div>
                    <div className="icon">
                        <icon.Person />
                        <span>Sign in</span>
                    </div>
                    <div className="sign">
                        Sign up
                    </div>
                </div>
                <div onClick={toggleSidebar} className="menu-btn">
                    {sidebarOpen ? <icon.X onClick={toggleSidebar} className='toggle' /> : <icon.List onClick={toggleSidebar} className='toggle' />}
                </div>
            </div>
            <div className={`navbarBottom ${sidebarOpen ? 'open' : ''}`}>
                <div className="navBottomTop">
                    <div className="icon">
                        <img src="images/language_icon.png" alt="" />
                        <span>ENG</span>
                    </div>
                    <div className="icon">
                        <icon.Person />
                        <span>Sign in</span>
                    </div>
                    <div className="sign">
                        Sign up
                    </div>
                </div>
                <div className="navBLeft">

                    <div className="item">
                        <icon.List className='icon' />
                        All categories
                    </div>
                    <div className="item">
                        Become a supplier
                    </div>
                    <div className="item">
                        Cost estimator
                    </div>
                </div>
                <div className="navBRight">
                    <div className="item">
                        About ENNYEN
                    </div>
                    <div className="item">
                        Our services
                    </div>
                    <div className="item">
                        Blog
                    </div>
                    <div className="item">
                        Help center
                    </div>
                </div>
            </div>
        </div>
    );
}
