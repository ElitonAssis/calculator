import { createContext, useState } from "react";

export const ValueContext = createContext()

export function ValueProvider(props) {

    const [firstvalue, setFirstValue] = useState([])
    //os valores devem ser um array que recebe uma copia de si mesmo a cada atualização
    const [secondValue, setSecondValue] = useState([])
    const [time, setTime] = useState(true)
    const [result, setResult] = useState()
    const [simbol, setSimbol] = useState('')

    return (
        <ValueContext.Provider value={{
            firstvalue: [firstvalue, setFirstValue],
            secondValue: [secondValue, setSecondValue],
            time: [time, setTime],
            result: [result, setResult],
            simbol: [simbol, setSimbol]
        }}>
            {props.children}
        </ValueContext.Provider>
    )
} 