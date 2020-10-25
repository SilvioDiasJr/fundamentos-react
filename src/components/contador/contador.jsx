import React from 'react'
import { Component } from 'react';

import './contador.css'

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  }

  incremento = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  decremento = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value,
    })
  }

  render() {
    return(
      <div className="contador">
        <h2>Contador</h2>
        <p>{this.state.numero}</p>
        <div>
          <label htmlFor="passoInput">Passo:</label>
          <input 
            type="number" 
            id="passoInput" 
            value={this.state.passo} 
            onChange = {this.setPasso}
          />
        </div>
        <button onClick={this.incremento}>+</button>
        <button onClick={this.decremento}>-</button>
      </div>
    )
  }
}