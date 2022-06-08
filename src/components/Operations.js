import { useContext } from "react"
import { ValueContext } from "./Context"

function Operations() {
    const { firstvalue: [firstvalue, setFirstValue],
        secondValue: [secondValue, setSecondValue],
        time: [time, setTime],
        result: [result, setResult],
        simbol: [simbol, setSimbol]
    } = useContext(ValueContext)
    console.log(result)
    function indicator(e) {
        let button = e.target.id;

        if (firstvalue != '') {

            result ? console.log('ok') : setSimbol(button)
            setTime(false)
        }
    }
    function sum() {
        let v1 = Number(firstvalue.join(''));
        let v2 = Number(secondValue.join(''));
        return v1 + v2
    }
    // teoria  = o sinal pode ser decidido pelo estado(simbol)
    function subtraction() {
        let v1 = Number(firstvalue.join(''));
        let v2 = Number(secondValue.join(''));
        return v1 - v2

    }

    function mult() {
        let v1 = Number(firstvalue.join(''));
        let v2 = Number(secondValue.join(''));
        return v1 * v2

    }
    function div() {
        let v1 = Number(firstvalue.join(''));
        let v2 = Number(secondValue.join(''));

        if (v2 === 0) { return alert(" don't it's possible div by 0") }
        return v1 / v2

    }


    function equal() {
        if (simbol === '+') { setResult([sum()]) }
        else if (simbol === '-') { setResult([subtraction()]) }
        else if (simbol === '*') { setResult([mult()]) }
        else if (simbol === '/') { setResult([div()]) }

    }
    ////////////////////////////////////////////
    return (
        <div className='operation'>
            <button className="opButton" id="+" onClick={indicator}>+</button>
            <button className="opButton" id="-" onClick={indicator}>-</button>
            <button className="opButton" id="*" onClick={indicator}>x</button>
            <button className="opButton" id="/" onClick={indicator}>/</button>
            <button className="opButton" id='=' onClick={equal}>=</button>
        </div>
    )
}
export default Operations
