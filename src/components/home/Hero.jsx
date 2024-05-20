import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Hero() {
    return (
        <div className='hero'>
            <div className="heroWrapper">
                <h3>
                    ENNYEN  MarketPlace.
                </h3>
                <p>Market and sell solar products and services to the world for a greenervearth!</p>

                <div className="heroSearch">
                    <div className="searchRight">
                        <select name="category" id="">
                            <option value="solar">solar categories</option>
                        </select>

                        <select name="types" id="">
                            <option value="solution">solution types</option>
                        </select>

                        <select name="location" id="">
                            <option value="location">location</option>
                        </select>

                        <input type="text" placeholder='What have you been looking for...' />
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />

                </div>
            </div>
        </div>
    )
}
