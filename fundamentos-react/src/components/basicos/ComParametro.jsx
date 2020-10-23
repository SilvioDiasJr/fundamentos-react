import React from 'react'

const ComParametro = (props) => {

  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  
  return(
    <div>
      <h2>{ props.titulo }</h2>
      <p>{ props.aluno } tem nota { props.nota } e está { status }</p>
    </div>
  )
}

export default ComParametro