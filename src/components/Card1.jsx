import React, { memo } from 'react'

function Card1({ name, age }) {
    console.log('1')
    return (
        <div className='cardWrapper'>
            <div className="nameSection">
                <span>Name: </span>
                <span id='name'>{name}</span>
            </div>

            <div className="ageSection">
                <span>Age: </span>
                <span id='age'>{age}</span>
            </div>
        </div>
    )
}

export default memo(Card1)