import React from 'react'

import produtos from '../../data/produtos'

import './TabelaProdutos.css'

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
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>preço</th>
          </tr>
        </thead>
        <tbody>
          {produtoList}
        </tbody>
      </table>
    </div>
  )
}