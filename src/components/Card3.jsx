import React, { memo } from 'react'

function Card3({ techArr }) {
    console.log('3')

    return (
        <div className='cardWrapper'>
            <div style={{ fontWeight: "bold" }}>TECHNOLOGIES WORKED</div>
            {
                techArr.map(tech => (
                    <div key={tech}>{tech}</div>
                ))
            }
        </div>
    )
}

export default memo(Card3)