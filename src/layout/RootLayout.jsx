import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/header/Topbar';
import Navbar from '../components/header/Navbar';

export default function RootLayout() {
    const [isTopbarVisible, setIsTopbarVisible] = useState(true);

    const handleCloseTopbar = () => {
        setIsTopbarVisible(false);
    };

    return (
        <div>
            {isTopbarVisible && <Topbar onClose={handleCloseTopbar} />}
            <Navbar isTopbarVisible={isTopbarVisible} />
            <div className={`main ${!isTopbarVisible ? 'TopbarZero' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
}
