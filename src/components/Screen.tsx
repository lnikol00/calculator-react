import React from 'react'
import useCont from '../hooks/useCont';

function Screen() {

    const { calc } = useCont();

    return (
        <div className='screen-container'>
            <span>{calc?.num ? calc?.num : calc?.res}</span>
        </div>
    )
}

export default Screen
