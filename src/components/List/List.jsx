import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Input from '../Input/Input';
import { DivStyled } from './List.styles';


const List = () => {
    //Estado para as tarefas
    const [tarefas, setTarefas] = useState([]);
    //Estado para o input
    const [novaTarefa, setNovaTarefa] = useState('');

    const [contador, setContador] = useState(0)

    const [valorBusca, setValorBusca] = useState('')

    useEffect(() => {
        console.log(valorBusca)
        tarefas.forEach((tarefaSelecionada) => {
            const elemento = document.getElementById(`elemento${tarefaSelecionada.id}`)
            elemento.style.backgroundColor = 'transparent'
        })
    }, [valorBusca])

    const handleChange = (event) => {
        setValorBusca(event.target.value)
    }

    const envioTarefa = (event) => {
        event.preventDefault();
        //Cria uma nova tarefa com o texto do input
        const objNovaTarefa = {
            id: contador,
            titulo: novaTarefa,
        }
        setTarefas([...tarefas, objNovaTarefa]);

        setContador(contador + 1)
        //Limpa o input
        setNovaTarefa('');
    };

    //Função marcar task como concluída
    const concluirTarefa = (index) => {
        const novaTarefa = [...tarefas];

        const edicao = novaTarefa.map((tarefa) => {
            if (tarefa.id == index) {
                const concluido = tarefa.titulo
                if (concluido.indexOf("✅") == -1) {
                    return {
                        id: tarefa.id,
                        titulo: "✅" + tarefa.titulo
                    }
                } else {
                    return {
                        id: tarefa.id,
                        titulo: tarefa.titulo.slice(1)
                    }
                }
            }
            return tarefa
        })
        setTarefas(edicao);
    };

    //Função editar task
    const editarTarefa = (index) => {
        const texto = document.getElementById('edicao').value
        if (texto != '') {
            const editarTarefa = tarefas.map((tarefa) => {
                if (tarefa.id == index) {
                    return {
                        id: tarefa.id,
                        titulo: texto
                    }
                }
                return tarefa
                //Atualiza o estado com o novo array

            })
            setTarefas(editarTarefa);
        }
    };

    //Função deletar task
    const deletar = (index) => {
        const removerTarefa = [...tarefas];
        //Remove a tarefa do array de tarefas
        const filtro = removerTarefa.filter((elemento) => {
            return elemento.id != index
        })
        //Atualiza o estado com o novo array
        setTarefas(filtro);
    }

    const buscar = () => {
        // const tarefa = document.getElementById('buscar').value
        const buscarTarefa = tarefas.filter((task) => {
            return task.titulo == valorBusca || task.titulo == `✅${valorBusca}`
        });

        buscarTarefa.forEach((tarefaSelecionada) => {
            const elemento = document.getElementById(`elemento${tarefaSelecionada.id}`)
            elemento.style.backgroundColor = 'green'
        })
    }

    return (
        <DivStyled>
            {/* Título da lista */}
            <h1>Minha Lista Diária</h1>
            <p>Nota: Ao clicar na tarefas ela é marcada como concluída</p>
            <Input tipo={"text"} texto={"Buscar tarefa"} estilo="buscar" valorBusca={valorBusca} func={handleChange} />
            <Button style="add" texto='Buscar' func={() => buscar()} />
            {/* Formulário para adicionar tarefas */}
            <form onSubmit={envioTarefa}>
                {/* Input para adicionar tarefas */}
                <Input tipo={"text"} texto={"Adicionar nova tarefa"} valorBusca={novaTarefa} func={(event) => setNovaTarefa(event.target.value)} />
                {/* Botão para adicionar tarefas */}
                <Button style="add" texto='Adicionar' tipo={"submit"} />
            </form>
            {/* Lista de tarefas */}
            <ul>
                {tarefas.map((task) => (
                    <div className="elementos" key={task.id}>
                        {/* Para cada tarefa no array é construido uma <li> com um componente botão para edição e deleção
                        também é criado um <input> para a edição da tarefa */}
                        <li key={task.id} id={`elemento${task.id}`} onClick={() => concluirTarefa(task.id)}>
                            <a>{task.titulo}</a>
                        </li>
                        <Button style="delete" texto='Deletar' key={`btnDelete${task.id}`} func={() => deletar(task.id)} />
                        <Button style="edit" texto='Editar' key={`btnEdit${task.id}`} func={() => editarTarefa(task.id)} />
                        <Input tipo={"text"} texto={"Edite aqui"} chave={"edicao"} estilo="edicao" />
                    </div>
                ))}
            </ul>
        </DivStyled>
    )
}

export default List