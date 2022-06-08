import { useContext } from "react"
import { ValueContext } from "./Context"

function Numbers() {
    
    const {
        firstvalue: [firstvalue, setFirstValue],
        secondValue: [secondValue, setSecondValue],
        time: [time, setTime],
        result: [result, setResult],
        simbol: [simbol, setSimbol]
    } = useContext(ValueContext)

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
  
    function setValue(n) {
        if (time) {
            result ? console.log('ok') : setFirstValue([...firstvalue, n]) //serve para impedir que o estado seja alterado depois de clilcar em alguma operação
        } else {
            result ? console.log('ok') : setSecondValue([...secondValue, n])

        }
    }

    return (
        <div className="numbers">

            {numbers.map((n) => {
                return <button className="numButton" key={n} onClick={() => { setValue(n) }}>
                    {n}
                </button>
            })}

            <button onClick={() => {
                setFirstValue([]);
                setSecondValue([])
                setTime([true])
                setResult('')
                setSimbol('')
            }} className="clear">clear</button>
        </div>
    )
}
export default Numbers