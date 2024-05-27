import { faFacebook, faLinkedin, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='section'>
            <div className="footerTop">
                <div className="footerLinksContainer">
                    <div className="item">
                        <div className="title">
                            What we do
                        </div>
                        <ul>
                            <li>
                                Clean Energy Consultation
                            </li>
                            <li>
                                Solar Costing & estimation
                            </li>
                            <li>
                                Solar Design, Installation and support
                            </li>
                            <li>
                                ENNYEN Marketplace
                            </li>
                        </ul>
                    </div>

                    <div className="item">
                        <div className="title">
                            Get support
                        </div>
                        <ul>
                            <li>
                                <Link to='./'>Help Centre</Link>
                            </li>
                            <li>
                                <Link to='./'>Live chat</Link>
                            </li>
                            <li>
                                <Link to='./'>Refunds</Link>
                            </li>
                            <li>
                                <Link to='./'>Chek order status</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="item">
                        <div className="title">
                            Source on ENNYEN
                        </div>
                        <ul>
                            <li>
                                Request for Quotation
                            </li>
                            <li>
                                Membership program
                            </li>
                            <li>
                                Logistics by ENNYEN
                            </li>
                            <li>
                                Sales taxes
                            </li>
                            <li>
                                Our blog
                            </li>
                        </ul>
                    </div>

                    <div className="item">
                        <div className="title">
                            ENNYEN Marketplace
                        </div>
                        <ul>
                            <li>
                                Start selling
                            </li>
                            <li>
                                Seller central
                            </li>
                            <li>
                                Become a verified supplier
                            </li>
                            <li>
                                Discover our services
                            </li>
                        </ul>
                    </div>

                    <div className="item">
                        <div className="title">
                            Unveiling Our identity
                        </div>
                        <ul>
                            <li>
                                About ENNYEN
                            </li>
                            <li>
                                Corporate Responsibility
                            </li>
                            <li>
                                News center
                            </li>
                            <li>
                                Careers
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="socials">
                    <span>Follow us:</span>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faTiktok} />
                    </Link>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                </div>
            </div>

            <div className="line"></div>

            <div className="footerBottom">
                <div className="footerBottomTop">
                    <div className="left">
                        Policy | production | privacy | Terms | compliance
                    </div>
                    <div className="right">
                        &copy; 2023-2024 ENNYEN LLC. All rights reserved.
                    </div>
                </div>
                <p>
                    ENNYEN LCC is registered US business with R.C and Tax ... ENNYEN MarketPlace; owned & managed by ENNYENN LLC & Partner is a marketplace App to assist solar product producers in meeting potential customers and also ease customers’ search for solar products and services within the United States of America.
                </p>
                <p>
                    Ennyen ensures sellers on its platform are registered & legal businesses ... Cases of fraud & illegal activities should be reported immediate here
                </p>
            </div>
        </footer>
    )
}
