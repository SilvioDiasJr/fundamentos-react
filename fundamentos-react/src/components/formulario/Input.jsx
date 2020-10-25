import React from 'react'
import { useState } from 'react'

export default props => {

  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    setValor(e.target.value)
  }

  return (
    <div>
      <h2>{valor}</h2>
      <input type="text" value={valor} onChange={quandoMudar}/>
      <input type="text" value={valor} readOnly/>
      <input type="text" value={undefined} /> {/* componente não controlado */}
    </div>
  )
}