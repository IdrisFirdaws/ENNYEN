import React from 'react'
import ProdCatTopbar from '../components/header/prodCategory/ProdCatTopbar'
import ProdCatNavbar from '../components/header/prodCategory/ProdCatNavbar'
import { Outlet } from 'react-router-dom'

export default function ProdCategoryLayout() {
    return (
        <div className='prodCatLayout'>
            <ProdCatTopbar />
            <ProdCatNavbar />
            <div className="prodCatMain">
                <Outlet />
            </div>
        </div>
    )
}
