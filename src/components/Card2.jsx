import React, { memo } from 'react'

function Card2({ occupation }) {
    console.log('2')

    return (
        <div className='cardWrapper'>
            <div className="occSection">
                <span>Occupation: </span>
                <span id='Occupation'>{occupation}</span>
            </div>
        </div>
    )
}

export default memo(Card2)