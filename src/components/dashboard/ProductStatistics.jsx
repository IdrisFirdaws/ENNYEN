import React from 'react'
import * as icon from 'react-bootstrap-icons'

export default function ProductStatistics() {

    let productOnSale = 3000
    let salesOfWeek = 500

    let mostViewedProd = 'solar panel'
    let productView = 500

    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    product statistics
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <div className="down">
                <div className='sales'>
                    <div className='tag'>
                        product on sale
                    </div>
                    <div className='figure'>
                        {productOnSale}
                    </div>
                </div>

                <div className='sales'>
                    <div className="tag">
                        sales of the week
                    </div>

                    <div className='figure'>
                        {salesOfWeek}
                    </div>
                </div>
            </div>
        </div>
    )
}
