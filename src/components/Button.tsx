import React from 'react'
import useCont from '../hooks/useCont'
import { click } from '@testing-library/user-event/dist/click'

type Props = {
    click?: (value: string | number) => void
    value?: string | number
}

function Button({ value }: Props) {

    const { calc, setCalc } = useCont();

    const handleBtnClick = () => {

        // const results: Props = {
        //     click: commaClick
        // }

        // const value = '.'

        // return results[value]()
    }

    const commaClick = () => {
        setCalc({
            ...calc,
            num: 29
        })
    }

    return (
        <button onClick={handleBtnClick}>
            {value}
        </button>
    )
}

export default Button
