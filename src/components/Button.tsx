import React from 'react'
import useCont from '../hooks/useCont'

type Props = {
    value: string | number
}

function Button({ value }: Props) {

    const { calc, setCalc } = useCont();

    const handleBtnClick = () => {

        const results: any = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick
        }

        if (results[value]) {
            return results[value]()
        } else {
            return handleClickNumber()
        }

    }

    const handleClickNumber = () => {
        const numberString = value.toString()

        let numberValue;
        if (numberString === '0' && calc.num === 0) {
            numberValue = '0'
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const commaClick = () => {
        setCalc({
            ...calc,
            // num: !calc.num?.toString().includes('.') ? calc.num + value : calc.num
            num: 29
        })
    }
    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    const equalsClick = () => {

        // const math = (a: number, b: number, sign: string) => {
        //     const result = {
        //         '+': (a: number, b: number) => a + b,
        //         '-': (a: number, b: number) => a - b,
        //         'x': (a: number, b: number) => a * b,
        //         '/': (a: number, b: number) => a / b
        //     }

        //     result 
        // }


        setCalc({
            // res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
        })
    }

    return (
        <button onClick={handleBtnClick}>
            {value}
        </button>
    )
}

export default Button
