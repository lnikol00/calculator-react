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
            '=': equalsClick,
            '%': percentClick,
            '+/-': invertClick
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
            num: !calc.num?.toString().includes('.') ? Number(calc.num) + Number(value) : Number(calc.num)
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

        if (calc.res && calc.num) {
            const math = (a: number, b: number, sign: string) => {
                const result: any = {
                    '+': (a: number, b: number) => a + b,
                    '-': (a: number, b: number) => a - b,
                    'x': (a: number, b: number) => a * b,
                    '/': (a: number, b: number) => a / b
                }

                return result[sign](a, b);
            }

            setCalc({
                res: math(Number(calc.res), Number(calc.num), String(calc.sign)),
                sign: '',
                num: 0
            })
        }
    }

    const percentClick = () => {
        setCalc({
            num: (Number(calc.num) / 100),
            res: (Number(calc.num) / 100),
            sign: ''
        })
    }

    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }

    return (
        <button onClick={handleBtnClick}>
            {value}
        </button>
    )
}

export default Button
