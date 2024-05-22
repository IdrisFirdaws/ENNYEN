import { faAngleRight, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionFour() {
    return (
        <div className='section sectionFour'>
            <div className="largeTitle">
                <div className="text">
                    cut out the Middleman!
                </div>
                <div className="title">
                    Source Solar Directly from Factories
                </div>
            </div>

            <div className="photoContent">
                <div className="left">
                    <div className="bottomText">
                        <div className="smallTitle">Qqan Solar Manufactures Co. LTD</div>
                        <div className="smallText">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <span>Guangzhou, China</span>
                        </div>

                        <Link to='/'>
                            <span>Take a tour</span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="bottomText">
                            <div className="smallTitle">Shushan & Co. LTD</div>
                            <div className="smallText">
                                <FontAwesomeIcon icon={faLocationPin} />
                                <span>Frankfurt, Germany</span>
                            </div>

                            <Link to='/'>
                                <span>Take a tour</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottomText">
                            <div className="smallTitle">BWW Solar Suppliers</div>
                            <div className="smallText">
                                <FontAwesomeIcon icon={faLocationPin} />
                                <span>Guangzhou, China</span>
                            </div>

                            <Link to='/'>
                                <span>Take a tour</span>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
