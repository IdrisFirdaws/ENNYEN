import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
    return (
        <div className='homeNavbar'>
            <div className="navbarTop">
                <img src="images/logo-green.png" alt="" className='logo' />
                <div className="searchbar">
                    <input type="text" placeholder='Search ENNYEN...' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
                </div>
                <div className="navbarRight">
                    <div className="icon">
                        <img src="images/language_icon.png" alt="" />
                        <span>ENG</span>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Sign in</span>
                    </div>
                    <div className="sign">
                        Sign up
                    </div>
                </div>
            </div>
            <div className="navbarBottom">
                <div className="navBLeft">
                    <div className="item">
                        <FontAwesomeIcon icon={faBars} className='itemIcon' />
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
    )
}
