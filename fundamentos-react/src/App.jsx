import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      
      <div className="Cards">
        <Card titulo="#06 - Repetição" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />           
          </Familia>
        </Card>

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