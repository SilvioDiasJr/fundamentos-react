import React from  'react'

const Aleatorio = (props) => {

  const numAleatorio = Math.floor(Math.random() * (props.max - props.min + 1) + props.min) 

  return (
    <div>
      <h2>Aleatório</h2>
      <p>O número aleatório é <strong>{ numAleatorio }</strong></p>
    </div>
  )
}

export default Aleatorio