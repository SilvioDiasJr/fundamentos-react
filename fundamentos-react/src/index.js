import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import './index.css'

ReactDom.render(
  <div>
    <Primeiro />
    <ComParametro 
      titulo= "Situação do Aluno" 
      aluno="Silvio" nota={7} 
    />
    <Fragmento />
  </div>,
  document.getElementById('root')
)