import React from 'react'

const Button = (props) => {
  return (
    <button className={props.style} onClick={props.func} type={props.tipo}>{props.texto}</button>
  )
}

export default Button