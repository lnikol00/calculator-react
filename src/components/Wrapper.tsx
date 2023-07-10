import React from 'react'

type Props = {
    children: React.ReactNode
}

function Wrapper({ children }: Props) {
    return (
        <div className='main-container'>
            <div className='calculator-container'>
                {children}
            </div>
        </div>
    )
}

export default Wrapper
