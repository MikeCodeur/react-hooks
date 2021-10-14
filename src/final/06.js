// useRef et useEffect
// http://localhost:3000/alone/final/06.js

import * as React from 'react'
import calculate from '../logic/calculate'
import '../06-styles.css'

function Display({value}) {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  )
}
function Button({name, orange, wide, clickHandler}) {
  const handleClick = () => {
    clickHandler(name)
  }

  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ]
  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}
function ButtonPanel({clickHandler}) {
  const handleClick = buttonName => {
    clickHandler(buttonName)
  }

  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="0" clickHandler={handleClick} wide />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} orange />
      </div>
    </div>
  )
}

export default function App() {
  const [total, setTotal] = React.useState(null)
  const [next, setNext] = React.useState(null)
  const [operation, setOperation] = React.useState(null)

  const handleClick = buttonName => {
    const objCalc = calculate({total, next, operation}, buttonName)

    if (objCalc.total !== undefined) {
      setTotal(objCalc.total)
    }
    if (objCalc.next !== undefined) {
      setNext(objCalc.next)
    }
    if (objCalc.operation !== undefined) {
      setOperation(objCalc.operation)
    }
  }

  return (
    <div className="component-app">
      <Display value={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}
