import React from 'react'
import * as icon from 'react-bootstrap-icons'

export const topSellProduct = [
    {
        productId: 1,
        id: 1,
        prodName: 'solar panel',
        prodCat: 'solar lamp',
        prodStock: 'instock',
        prodPrice: 200,
        prodSales: 300000,
    },
    {
        productId: 2,
        id: 2,
        prodName: 'solar baatteries',
        prodCat: 'solar lamp',
        prodStock: 'instock',
        prodPrice: 200,
        prodSales: 25000,
    },
    {
        productId: 3,
        id: 3,
        prodName: 'solar lamp',
        prodCat: 'solar lamp',
        prodStock: 'instock',
        prodPrice: 200,
        prodSales: 300000,
    },
    {
        productId: 4,
        id: 4,
        prodName: 'solar lamp',
        prodCat: 'solar lamp',
        prodStock: 'instock',
        prodPrice: 200,
        prodSales: 300000,
    }
]

export default function TopSellingProduct() {
    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    top selling product
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <table>
                <thead>
                    <td>ID</td>
                    <td>product name</td>
                    <td className='md'>category</td>
                    <td>stock</td>
                    <td>price</td>
                    <td className='sm'>sales</td>
                </thead>

                {
                    topSellProduct.map(topProd => (
                        <tr key={topProd.productId}>
                            <td>{topProd.id}</td>
                            <td>{topProd.prodName}</td>
                            <td className='md'>{topProd.prodCat}</td>
                            <td className={topProd.prodStock}>{topProd.prodStock}</td>
                            <td>${topProd.prodPrice}</td>
                            <td className='sm'>{topProd.prodSales}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}
