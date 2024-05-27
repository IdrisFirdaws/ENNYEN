import React from 'react'
import * as icon from 'react-bootstrap-icons'

export const mostViewedProducts = [
    {
        id: 1,
        prodImg: 'images/products/Ellipse-46.png',
        prodName: "solar lamp",
        prodPrice: 250
    },
    {
        id: 2,
        prodImg: 'images/products/Ellipse-46.png',
        prodName: "solar lamp",
        prodPrice: 250
    },
    {
        id: 3,
        prodImg: 'images/products/Ellipse-46.png',
        prodName: "solar lamp",
        prodPrice: 250
    },
    {
        id: 4,
        prodImg: 'images/products/Ellipse-46.png',
        prodName: "solar lamp",
        prodPrice: 250
    },
    {
        id: 5,
        prodImg: 'images/products/Ellipse-46.png',
        prodName: "solar lamp",
        prodPrice: 250
    }
]

export default function MostViewedProducts() {
    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    top 5 most viewed products
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <table>
                {
                    mostViewedProducts.map(viewedprod => (
                        <tr key={viewedprod.id}>

                            <td>
                                <img src={viewedprod.prodImg} alt="" />
                                {viewedprod.prodName}
                            </td>
                            <td className='price'>
                                <span>${viewedprod.prodPrice}</span>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
