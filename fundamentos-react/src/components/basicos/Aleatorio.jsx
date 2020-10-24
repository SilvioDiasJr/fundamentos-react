import React from  'react'

const Aleatorio = (props) => {
  const { min, max } = props
  const numAleatorio = Math.floor(Math.random() * (max - min + 1) + min) 

  return (
    <div>
      <h2>Númer aleatório</h2>

      <p>Valor minimo: <strong>{min}</strong></p>

      <p>Valor máximo: <strong>{max}</strong></p>

      <p>O número aleatório é <strong>{ numAleatorio }</strong></p>
    </div>
  )
}

export default Aleatorio