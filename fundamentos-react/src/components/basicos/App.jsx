import React from 'react'

import Primeiro from './Primeiro'
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'

const App = () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
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