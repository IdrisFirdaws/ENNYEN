
import React, { useState } from 'react';
import * as icon from 'react-bootstrap-icons'

export default function ProdCatNavbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // const closeSidebar = () => {
    //     setSidebarOpen(false);
    // };


    return (
        <div className='prodCatNavbar'>
            <div className="navbarTop">
                <img src="images/logo/logo-white.png" alt="" className='logo' />

                <div className="navbarRight">
                    <div className="lang">
                        <img src="images/icon/ion_language_white.png" alt="" />
                        <span>ENG - USD</span>
                    </div>
                    <div className="icon">
                        <div className="wish">
                            <icon.Heart />
                            <span>0</span>
                        </div>
                        <div className="text">wish list</div>

                    </div>
                    <div className="icon">
                        <div className="wish">
                            <icon.Cart2 />
                            <span>0</span>
                        </div>
                        <div className="text">cart</div>

                    </div>

                    <div className="sign">
                        <icon.Person className='icon' />

                        <div className="free">
                            Sign in
                            <span>Join ENNYEN for free</span>
                        </div>
                    </div>

                </div>
                <div onClick={toggleSidebar} className="menu-btn">
                    {sidebarOpen ? <icon.X onClick={toggleSidebar} className='toggle' /> : <icon.List onClick={toggleSidebar} className='toggle' />}
                </div>
            </div>
            <div className={`navbarBottom ${sidebarOpen ? 'open' : ''}`}>
                <div className="navBottomTop">
                    <div className="sign">
                        <icon.Person className='icon' />

                        <div className="free">
                            Sign in
                            <span>Join ENNYEN for free</span>
                        </div>
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
                    <div className="item">
                        <icon.Phone className='icon' />
                        Help center
                    </div>
                </div>
            </div>
        </div>
    );
}
