import React from 'react'
import cicrleLeft from '../../assets/CircleLeft.svg'

function CircleElementsGroup({chidlren}) {
    let width = window.innerWidth

    return (
        <div className={`circle-elements-group`}>
            { chidlren }
        </div>
    )
}

export default CircleElementsGroup
