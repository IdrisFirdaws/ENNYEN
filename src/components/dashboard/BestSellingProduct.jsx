import React from 'react'
import * as icon from 'react-bootstrap-icons'

export default function BestSellingProduct() {

    let bestSellingProduct = 'solar power bank';
    let bestSellingProductImg = 'images/products/power-bank.png'
    let percentageSale = 5.0;
    let saleStatus = 'positive';

    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    best selling product
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <div className="cardBottom">
                <div className="left">
                    <div className="prod">
                        {bestSellingProduct}
                    </div>
                    <div className="stat">
                        <icon.GraphUp />
                        <span className={saleStatus}>{percentageSale}%</span>
                    </div>
                </div>

                <div className="right">
                    <div className="image">
                        <img src={bestSellingProductImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
