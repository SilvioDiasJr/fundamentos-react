import React from 'react'

import Primeiro from './Primeiro'
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
import Aleatorio from './Aleatorio'
import Card from './layout/Card'

const App = () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>

      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio
          min={1}
          max={150}
        />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento /> 
      </Card>
      
      <Card titulo="#02 - Com Parâmetro">
        <ComParametro 
          titulo= "Situação do Aluno" 
          aluno="Silvio" nota={7} 
        /> 
      </Card>
      
      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  )
}

export default App