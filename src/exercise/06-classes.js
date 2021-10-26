// useRef et useEffect
// http://localhost:3000/alone/exercise/05.js

import React from 'react'
import calculate from '../logic/calculate'
import '../06-styles.css'

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    )
  }
}
class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name)
  }

  render() {
    const className = [
      'component-button',
      this.props.orange ? 'orange' : '',
      this.props.wide ? 'wide' : '',
    ]

    return (
      <div className={className.join(' ').trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    )
  }
}
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

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
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
