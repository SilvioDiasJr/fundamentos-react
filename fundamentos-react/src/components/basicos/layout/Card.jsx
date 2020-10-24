import React from 'react'

import './Card.css'

export default (props) => {

  const Cardstyle = {
    backgroundColor: props.color || '#f00',
    borderColor: props.color || '#f00',
  }

  return (
    <div className="Card" style={Cardstyle}>
      <div className="Title">
        {props.titulo}
      </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}