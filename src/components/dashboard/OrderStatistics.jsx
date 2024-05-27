import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function OrderStatistics() {
    let completedOrder = 300;
    let pendingOrder = 200;
    let canceledOrder = 40;
    let refundedOrder = 40;

    const data = {
        // labels: ['Pending orders', 'Canceled orders', 'Completed orders', 'Refunded orders'],
        datasets: [{
            data: [pendingOrder, canceledOrder, completedOrder, refundedOrder],
            backgroundColor: ['#f7eb60', '#2660a3', '#304e26', '#bccee2']
        }]
    }

    const options = {}

    return (
        <div className='orderStats'>
            <div className="dashboardCardTitle">order statistics</div>
            <div className='chart'>
                <Doughnut
                    data={data}
                    options={options}
                ></Doughnut>
            </div>
            <div className="down">
                <div className="key">Key</div>

                <div className='order complete'><span>Completed orders </span> ({completedOrder})</div>
                <div className='order pending'><span>Pending orders </span> ({pendingOrder})</div>
                <div className='order canceled'><span>canceled orders </span> ({canceledOrder})</div>
                <div className='order refunded'><span>refunded orders </span>({refundedOrder})</div>

            </div>
        </div>
    )
}
