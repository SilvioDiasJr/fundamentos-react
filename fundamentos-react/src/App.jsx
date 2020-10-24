import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/basicos/layout/Card'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      
      <div className="Cards">
        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio
            min={1}
            max={150}
          />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento /> 
        </Card>
        
        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro 
            titulo= "Situação do Aluno" 
            aluno="Silvio" nota={7} 
          /> 
        </Card>
        
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}

export default App