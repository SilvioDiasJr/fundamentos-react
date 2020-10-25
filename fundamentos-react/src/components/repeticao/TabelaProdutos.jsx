import React from 'react'

import produtos from '../../data/produtos'

export default props => {

  const produtoList = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    )
  })

  return(
    <div>
      <table>
        <th>id</th>
        <th>nome</th>
        <th>preço</th>
        {produtoList}
      </table>
    </div>
  )
}