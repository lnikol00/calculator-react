import React, { useState } from 'react'
import { createContext } from 'react'

type Props = {
    children: React.ReactNode
}

export type ContextType = {
    calc: {
        sign?: string
        num?: number
        res?: number
    }
    setCalc: React.Dispatch<any>
}

export const CalcContext = createContext<ContextType | null>(null)

const CalcProvider = ({ children }: Props) => {

    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0,
    })

    const providerValue = {
        calc, setCalc
    }

    return (
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    )

}

export default CalcProvider
