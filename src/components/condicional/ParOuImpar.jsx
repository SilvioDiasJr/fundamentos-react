import React from 'react'

export default props => {
  //const parOuImpar = props.numero % 2 == 0 ? 'Par' : "Impar"

  const isPar = props.numero % 2 === 0
  return (
    <div>
      {/*<}span>O número {props.numero} é <strong>{parOuImpar}</strong></span>*/}
      { isPar ?
          <span style={{color: 'green', fontWeight: 'bold'}}>Par</span> :
          <span style={{color: 'red', fontWeight: 'bold'}}>Ímpar</span>
      }
    </div>
  )
}