import React from 'react'

const Input = (props) => {
  return (
        <>  
            <input type={props.tipo} placeholder={props.texto} id={props.chave} className={props.estilo} value={props.valorBusca} onChange={props.func} />
        </>
  )
}

export default Input