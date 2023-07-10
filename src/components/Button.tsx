import React from 'react'

type Props = {
    value: string | number
}

function Button({ value }: Props) {
    return (
        <button>
            {value}
        </button>
    )
}

export default Button
