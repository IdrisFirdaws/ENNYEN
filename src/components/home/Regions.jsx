import React from 'react'

export const Region = [
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'Alaska'
    },
    {
        id: 1,
        region: 'Arizona'
    },
    {
        id: 1,
        region: 'Arkansas'
    },
    {
        id: 1,
        region: 'California'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'Connecticut'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'Alaska'
    },
    {
        id: 1,
        region: 'Arizona'
    },
    {
        id: 1,
        region: 'Arkansas'
    },
    {
        id: 1,
        region: 'California'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'Connecticut'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'Alaska'
    },
    {
        id: 1,
        region: 'Arizona'
    },
    {
        id: 1,
        region: 'Arkansas'
    },
    {
        id: 1,
        region: 'California'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'Connecticut'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'Alaska'
    },
    {
        id: 1,
        region: 'Arizona'
    },
    {
        id: 1,
        region: 'Arkansas'
    },
    {
        id: 1,
        region: 'California'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'Connecticut'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'Alaska'
    },
    {
        id: 1,
        region: 'Arizona'
    },
    {
        id: 1,
        region: 'Arkansas'
    },
    {
        id: 1,
        region: 'California'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'Connecticut'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'alabama'
    },
    {
        id: 1,
        region: 'Alaska'
    },
    {
        id: 1,
        region: 'Arizona'
    },
    {
        id: 1,
        region: 'Arkansas'
    },
    {
        id: 1,
        region: 'California'
    },
    {
        id: 1,
        region: 'colorado'
    },
    {
        id: 1,
        region: 'Connecticut'
    },
    {
        id: 1,
        region: 'colorado'
    },
]


export default function Regions() {
    return (
        <div className='region section'>
            <div className="largeTitle">
                <div className="text">
                    Discover Suppliers from Around USA
                </div>
                <div className="title">
                    Find Your Perfect Match by Region!
                </div>
            </div>

            <div className="regionContainer">
                {Region.map(reg => (
                    <div className="reg" key={reg.id}>
                        <span>{reg.region}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
