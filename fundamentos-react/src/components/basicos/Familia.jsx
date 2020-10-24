import React, {cloneElement} from 'react'

export default props => {
  /* passando a propriedades do pai para os filhos - 
  quando não tiver acesso aos filhos */
  return (
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, {...props, key: i})
        })
      }
    </div>
  )
}