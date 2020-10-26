import React, { useState } from 'react'

import './Mega.css'

export default props => {
  const [qtde, setQtde] = useState(props.qtde || 6)
  const [numeros, setNumeros] = useState(gerarNumerosAleatorios(qtde))

  function gerarNumerosAleatorios(qtde) {
    var array = []
    var index = 0

    while (index < qtde) {
      array[index] = gerarNumeroNaoContido(array)
      index++
    }
    return array.sort((a, b) => a - b)
  }

  function gerarNumeroNaoContido(array) {
    const numAleatorio = Math.floor(Math.random() * ((60 + 1) - 1) + 1);

    return array.includes(numAleatorio) ? gerarNumeroNaoContido(array) : numAleatorio
  }

    const listaNumeros = numeros.map((numero, index) => {
      return (
        <div key={index} >
          <h3>{numero}</h3>  
        </div>
      )
    })

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <div className="ListaNumeros">
        {listaNumeros}
      </div>
      
      <div >
        <label>Quantidade de números</label>
        <input 
          min = {6}
          max = {15}
          type="number" 
          value={qtde} 
          onChange={e => {
            setQtde(+e.target.value)
            setNumeros(gerarNumerosAleatorios(+e.target.value))
          }}
        />
      </div>

      <button onClick={e => setNumeros(gerarNumerosAleatorios(qtde))}>
        Gerar números
      </button>
    </div>
  )
}