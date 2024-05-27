import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../components/header/HomeNavbar';
import Topbar from '../components/header/Topbar';
import Footer from '../components/Footer';

export default function HomeLayout() {
    const [isTopbarVisible, setIsTopbarVisible] = useState(true);

    const handleCloseTopbar = () => {
        setIsTopbarVisible(false);
    };

    return (
        <div>
            {isTopbarVisible && <Topbar onClose={handleCloseTopbar} />}
            <HomeNavbar isTopbarVisible={isTopbarVisible} />
            <div className={`main ${!isTopbarVisible ? 'TopbarZero' : ''}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
