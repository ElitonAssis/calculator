import { useContext, useState } from "react"
import { ValueContext } from "./Context"


function Header(props) {
    const { firstvalue: [firstvalue, setFirstValue],
        secondValue: [secondValue, setSecondValue],
        time: [time, setTime],
        result: [result, setResult],
        simbol: [simbol, setSimbol]
    } = useContext(ValueContext)
 

 
    return (
        <div className="result">
          <div >{firstvalue}</div>
            <h3 className="simbol">{simbol}</h3>
            <div className="second">{secondValue}</div>
            <h3 className="equal">=</h3>
            <div className="resul">{result}</div> 
        </div>

    )
}
export default Header
{/*<div className="first">{firstvalue}</div>
            <h3 className="simbol">{simbol}</h3>
            <div className="second">{secondValue}</div>
            <h3 className="equal">=</h3>
            <div className="resul">{result}</div> */}

{/* {result.map(() => {

                if (result = ['']) {
                    if (time) { return <div> <h1>{firstvalue}</h1> '=' </div> }
                    else if (!time) { return <div> <h1>{secondValue}</h1>'='</div> }
                }
                else { <div> {result.map(r => <h1>{r}</h1>)} </div> }

            })} */}