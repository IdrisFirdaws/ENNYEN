import React from 'react'
import * as icon from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

export default function GiftSidebar() {

    let profileImg = 'images/user/profile.png'

    return (
        <div className='giftSidebar'>
            <div className="user">
                <img src={profileImg} alt="" />
            </div>

            <div className="nav">
                <NavLink to='/gift4me'><icon.GridFill /></NavLink>
                <NavLink to='/gift4me'><icon.Journal /></NavLink>
                <NavLink to='/gift4me'><icon.Grid3x3GapFill /></NavLink>
                <NavLink to='/gift4me'><icon.CardList /></NavLink>
                <NavLink to='/gift4me'><icon.Basket2Fill /></NavLink>
                <NavLink to='/gift4me'><icon.Person /></NavLink>
                <NavLink to='/gift4me'><icon.FileBarGraph /></NavLink>
                <NavLink to='/gift4me'><icon.Gear /></NavLink>
            </div>

            <div className="arrow">
                <icon.ArrowRight />
            </div>
        </div>
    )
}
