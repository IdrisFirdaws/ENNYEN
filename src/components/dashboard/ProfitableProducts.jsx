import React from 'react'
import * as icon from 'react-bootstrap-icons'

export const mostProfitableProduct = [
    {
        id: 1,
        ProdName: "solar panel",
        prodPrice: 250
    },
    {
        id: 2,
        ProdName: "solar batteries",
        prodPrice: 250
    },
    {
        id: 3,
        ProdName: "solar lamp",
        prodPrice: 250
    },
    {
        id: 4,
        ProdName: "solar fan",
        prodPrice: 250
    },
    {
        id: 5,
        ProdName: "solar watch",
        prodPrice: 250
    }
]

export default function ProfitableProducts() {
    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    top 5 most profitable products
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <table>
                {
                    mostProfitableProduct.map(profitProd => (
                        <tr key={profitProd.id}>
                            <td>{profitProd.id}</td>
                            <td>{profitProd.ProdName}</td>
                            <td className='price'>
                                <span>${profitProd.prodPrice}</span>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
