import React from 'react'

export default function CustomerRating() {

    let customerRating = 80
    let NoOfVisitors = 100;
    let customersReturning = 35

    return (
        <div>
            <div className="ratingWrapper">
                <div className="left">
                    <h4>Customer's rating</h4>
                    <h1>{customerRating}%</h1>
                </div>
                <hr />
                <div className="right">
                    <h5 className="text">Number of visitors</h5>
                    <h2 className="figure">{NoOfVisitors}</h2>
                    <h5 className="text">Number of customers returning</h5>
                    <h2 className="figure">{customersReturning}</h2>
                </div>
            </div>
        </div>
    )
}
