import React from 'react'

type Props = {
    children: React.ReactNode
}

function ButtonBox({ children }: Props) {
    return (
        <div className='button-container'>
            {children}
        </div>
    )
}

export default ButtonBox
