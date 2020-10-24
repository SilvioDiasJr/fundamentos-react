import React from 'react'

import Primeiro from './Primeiro'
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './Aleatorio'

const App = () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio
        min={1}
        max={150}
      />
      <Fragmento /> 
      <ComParametro 
        titulo= "Situação do Aluno" 
        aluno="Silvio" nota={7} 
      />
      <Primeiro />
    </div>
  )
}

export default App