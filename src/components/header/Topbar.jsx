import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarContent">
                    <div className="image">
                        <img src="images/solar_pannel.png" alt="" className='img1' />
                        <img src="images/solar-battery.png" alt="" className='img2' />
                    </div>
                    <div className="topbarText">unbeatable prices at solar shop!</div>
                    <div className="image">
                        <img src="images/eng.png" alt="" className='img3' />
                        <img src="images/equi_solar.png" alt="" className='img4' />
                    </div>
                </div>
                <div className="close">
                    <FontAwesomeIcon icon={faTimesCircle} />
                </div>
            </div>
        </div>
    )
}
