import React, { useRef, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 6000 })),
            borderColor: '#73b95b',
            backgroundColor: '#73b95b',
            tension: 0.4, // Makes the lines curved
            pointStyle: 'circle',
            pointBackgroundColor: '#e0e0e0',
            pointBorderColor: '#73b95b',
            pointRadius: 6, // Adjust the radius to match the size of the dot in the image
            pointBorderWidth: 4, // Adjust the border width if needed
            pointHoverRadius: 4,
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 6000 })),
            borderColor: '#2660a3',
            backgroundColor: '#2660a3',
            tension: 0.4, // Makes the lines curved
            pointStyle: 'circle',
            pointBackgroundColor: '#e0e0e0',
            pointBorderColor: '#2660a3',
            pointRadius: 6, // Adjust the radius to match the size of the dot in the image
            pointBorderWidth: 4, // Adjust the border width if needed
            pointHoverRadius: 4,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false, // Hides the legend
        },
    },
    scales: {
        x: {
            grid: {
                display: false, // Hides vertical grid lines
            },
        },
        y: {
            grid: {
                borderDash: [2, 2], // Optional: Adds dashed lines to the horizontal grid lines
            },
            ticks: {
                callback: function (value) {
                    return '$' + value; // Adds the dollar sign to the y-axis values
                }
            }
        },
    },
};

export default function SalesStatistics() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) {
            return;
        }

        setChartData(data);
    }, []);

    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">Sales Statistics</div>
                <div className="label">
                    <div className="prevWeek">
                        <div className="circle">
                            <div className="inner"></div>
                        </div>
                        <span>Previous Week</span>
                    </div>

                    <div className="thisWeek">
                        <div className="circle">
                            <div className="inner"></div>
                        </div>
                        <span>This Week</span>
                    </div>
                </div>
            </div>

            <div className="chart">
                <Chart ref={chartRef} type='line' data={chartData} options={options} />
            </div>
        </div>
    );
}
