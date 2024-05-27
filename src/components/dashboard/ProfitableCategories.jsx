import React from 'react'
import * as icon from 'react-bootstrap-icons'

export const mostProfitableCategories = [
    {
        id: 1,
        categoryName: "solar inverters",
        categoryPrice: 250
    },
    {
        id: 2,
        categoryName: "solar batteries",
        categoryPrice: 250
    },
    {
        id: 3,
        categoryName: "solar generators",
        categoryPrice: 250
    },
    {
        id: 4,
        categoryName: "solar accesories",
        categoryPrice: 250
    },
    {
        id: 5,
        categoryName: "solar controllers",
        categoryPrice: 250
    }
]

export default function ProfitableCategories() {
    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    top 5 most profitable Categories
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <table>
                {
                    mostProfitableCategories.map(profitcategory => (
                        <tr key={profitcategory.id}>
                            <td>{profitcategory.id}</td>
                            <td>{profitcategory.categoryName}</td>
                            <td className='price'>
                                <span>${profitcategory.categoryPrice}</span>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
