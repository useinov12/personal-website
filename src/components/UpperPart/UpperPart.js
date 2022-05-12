import React from 'react'
import AboutMe from './AboutMe'
import LeftGroup from './LeftCircleGroup'
import RightGroup from './RightCircleGroup'

function UpperPart({children}) {
    return (
        <div className='upper-part'>
            <LeftGroup/>
                <AboutMe />
            <RightGroup/>
        </div>
    )
}

export default UpperPart
