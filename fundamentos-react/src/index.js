import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import './index.css'

ReactDom.render(
  <div>
    <Primeiro />
  </div>,
  document.getElementById('root')
)