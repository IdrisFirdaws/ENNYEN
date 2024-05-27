import React from 'react'
import * as icon from 'react-bootstrap-icons'

export default function MostViewedProduct() {

    let mostViewedProd = 'solar panel'
    let mostViewedProdImg = 'images/products/panel-no-bg.png'
    let productView = 500

    return (
        <div>
            <div className="cardTop">
                <div className="dashboardCardTitle">
                    most viewed product
                </div>
                <div className="right">
                    <icon.ThreeDots className='dot' />
                </div>
            </div>

            <div className="cardBottom">
                <div className="left">
                    <div className="prod">
                        {mostViewedProd}
                    </div>
                    <div className="stat">
                        <icon.Eye />
                        <span>{productView}</span>
                    </div>
                </div>

                <div className="right">
                    <div className="image">
                        <img src={mostViewedProdImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
