// useRef et useEffect
// http://localhost:3000/alone/exercise/06.js

import React from 'react'
import calculate from '../logic/calculate'
import '../06-styles.css'

// 👨‍✈️ Il faut migrer cet application calculette.

// ⛏️ surprime 'extendsReact.Component' et renomme 'class' en 'function'
// 🐶 ajoute un prop 'value'
class Display extends React.Component {
  // 🐶 supprime le render mais garde le return
  render() {
    return (
      <div className="component-display">
        {/* ⛏️ supprime this.props */}
        <div>{this.props.value}</div>
      </div>
    )
  }
}
// 🐶 répète les mêmes étapes de conversion
class Button extends React.Component {
  // 🐶 ajoute const
  handleClick = () => {
    //⛏️ supprime this.props
    this.props.clickHandler(this.props.name)
  }
  //⛏️ supprime render()
  render() {
    const className = [
      'component-button',
      //⛏️ supprime this.props
      this.props.orange ? 'orange' : '',
      this.props.wide ? 'wide' : '',
    ]

    return (
      <div className={className.join(' ').trim()}>
        {/* ⛏️ supprime this et this.props */}
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    )
  }
}
// 🐶 répète les mêmes étapes de conversion
class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName)
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    )
  }
}
// 🐶 répète les mêmes étapes de conversion
export default class App extends React.Component {
  // 🐶 converti ces 3 states avec useState
  // 🤖 const [total, setTotal] = React.useState(null)
  state = {
    total: null,
    next: null,
    operation: null,
  }
  // 🐶 converti la fonction
  handleClick = buttonName => {
    const calculObject = calculate(this.state, buttonName)
    // ⚠️ Ici une syntaxe particulière `this.setState(calculObject)` qui permet de mettre à jour 3 states en meme temps
    // car calculObject contient total, next, operation
    // on pourait croire qu'il suffit de faire
    // 🤖
    // setTotal(calculObject.total)
    // setNext(calculObject.next)
    // setOperation(calculObject.operation)
    //
    // Mais cette syntaxe met systématiquemement à jour le state
    // tandis que this.setState(calculObject), met à jour uniquement si les states sont définis (!== undefined)
    // La bonne équivalence est plutot
    // 🤖
    // if (objCalc.total !== undefined) {
    //  setTotal(objCalc.total)
    // }

    // 🐶 Les migrations ne sont pas toujours automatisables et il faut comprendre les subitilités
    this.setState(calculObject)
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}
