import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/contador'
import Mega from './components/mega/Mega'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      
      <div className="Cards">
        <Card titulo="#13 - Desafio Mega Sena" color="#942">
          <Mega />
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial = {10}/>
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#E45F56">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#59323C">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={21}/>
          <UsuarioInfo usuario={{nome: 'Fernando'}}/>
          {/*<UsuarioInfo usuario={{}}/> */}
        </Card>

        <Card titulo="#07 - Desafio de Repetição" color="#000">
          <TabelaProdutos />
        </Card>

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