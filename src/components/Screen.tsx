import React from 'react'
import { Textfit } from 'react-textfit';
import useCont from '../hooks/useCont';

function Screen() {

    const { calc } = useCont();

    return (
        <div className='screen-container'>
            {/* <span>{calc?.num ? calc?.num : calc?.res}</span> */}
            <Textfit className='screen' max={70} mode="single">
                {calc?.num ? calc?.num : calc?.res}
            </Textfit>
        </div>
    )
}

export default Screen
