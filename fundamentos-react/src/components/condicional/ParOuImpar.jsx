import React from 'react'

export default props => {
  //const parOuImpar = props.numero % 2 == 0 ? 'Par' : "Impar"

  const isPar = props.numero % 2 === 0
  return (
    <div>
      {/*<}span>O número {props.numero} é <strong>{parOuImpar}</strong></span>*/}
      { isPar ?
          <span>Par</span> :
          <span>Ímpar</span>
      }
    </div>
  )
}