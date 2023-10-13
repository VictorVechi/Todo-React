import React from 'react'
import Input from '../Input/Input'
import Button from '../button/Button'

const Form = (props) => {
  return (
    <form onSubmit={props.enviar}>
                {/* Input para adicionar tarefas */}
                <Input tipo={"text"} texto={"Adicionar nova tarefa"} valorBusca={props.novaTarefa} func={(event) => props.setNovaTarefa(event.target.value)} />
                {/* Botão para adicionar tarefas */}
                <Button style="add" texto='Adicionar' tipo={"submit"} />
    </form>
  )
}

export default Form