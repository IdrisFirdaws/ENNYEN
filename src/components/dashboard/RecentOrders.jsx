import React from 'react'
import * as icon from 'react-bootstrap-icons'

export const recentOrders = [
    {
        productId: 1,
        id: 1,
        customerName: 'Ida rena',
        prodName: 'solar lamp',
        quantity: 3,
        amount: 200,
        status: 'complete',
    },
    {
        productId: 2,
        id: 2,
        customerName: 'raina pearl',
        prodName: 'solar lamp',
        quantity: 4,
        amount: 200,
        status: 'pending',
    },
    {
        productId: 3,
        id: 3,
        customerName: 'chloe reissa',
        prodName: 'solar lamp',
        quantity: 4,
        amount: 200,
        status: 'complete',
    },
    {
        productId: 4,
        id: 4,
        customerName: 'sam williams',
        prodName: 'solar lamp',
        quantity: 4,
        amount: 200,
        status: 'complete',
    }
]

export default function RecentOrders() {
    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    recent orders
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <table>
                <thead>
                    <td>ID</td>
                    <td>customer name</td>
                    <td>product</td>
                    <td className='md'>quantity</td>
                    <td className='sm'>amount</td>
                    <td>status</td>
                </thead>

                {
                    recentOrders.map(recentOrder => (
                        <tr key={recentOrder.productId}>
                            <td>{recentOrder.id}</td>
                            <td>{recentOrder.customerName}</td>
                            <td>{recentOrder.prodName}</td>
                            <td className='md'>{recentOrder.quantity}</td>
                            <td className='sm'>${recentOrder.amount}</td>
                            <td className={recentOrder.status}>{recentOrder.status}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}
