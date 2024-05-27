import React from 'react'
import GiftNAvbar from '../components/header/gift4me/GiftNAvbar'
import GiftSidebar from '../components/header/gift4me/GiftSidebar'
import GiftForMe from '../pages/GiftForMe'
import GiftRightbar from '../components/gift4me/GiftRightbar'

export default function GiftForMeLayout() {
    return (
        <div className='giftLayout'>
            <div className="mainGiftLayout">
                <GiftSidebar />
                <div className="giftContent">
                    <GiftNAvbar />
                    <div className="giftMain">
                        <div className="lg">
                            <GiftRightbar />
                        </div>
                        <GiftForMe />
                    </div>
                </div>
            </div>

            <div className="extra">
                <GiftRightbar />
            </div>
        </div>
    )
}
