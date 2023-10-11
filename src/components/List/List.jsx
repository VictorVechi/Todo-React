import React, { useState } from 'react';
import Styles from './list.module.css'
import Button from '../button/Button';


const List = () => {
    //Estado para as tarefas
    const [tarefas, setTarefas] = useState([]);
    //Estado para o input
    const [novaTarefa, setNovaTarefa] = useState('');

    const envioTarefa = (event) => {
        event.preventDefault();
        //Cria uma nova tarefa com o texto do input
        setTarefas([...tarefas, novaTarefa]);
        //Limpa o input
        setNovaTarefa('');
    };

    //Função marcar task como concluída
    const concluirTarefa = (index) => {
        const novaTarefa = [...tarefas];
        if(novaTarefa[index].indexOf('✅') == -1){
            //Adiciona o ícone de concluído na tarefa
            novaTarefa[index] = `✅ ${tarefas[index]}`;
            //Atualiza o estado com o novo array
            setTarefas(novaTarefa);
        } else {
            //Remove o ícone de concluído da tarefa
            novaTarefa[index] = novaTarefa[index].replace('✅', '')
            //Atualiza o estado com o novo array
            setTarefas(novaTarefa);
        }
    };

    //Função editar task
    const editarTarefa = (index) => {
        const texto = document.getElementById('edicao').value
        const editarTarefa = [...tarefas];
        editarTarefa[index] = `${texto}`;
        //Atualiza o estado com o novo array
        setTarefas(editarTarefa);

    };

    //Função deletar task
    const deletar = (index) => {
        const removerTarefa = [...tarefas];
        //Remove a tarefa do array de tarefas
        removerTarefa.splice(index, 1)
        //Atualiza o estado com o novo array
        setTarefas(removerTarefa);
    }

    const buscar = () => {
        const buscarTarefa = [...tarefas];
        const tarefa = document.getElementById('buscar').value
        buscarTarefa.indexOf(tarefa)
        console.log(buscarTarefa.indexOf(tarefa))
        const elemento = document.getElementById(`elemento${buscarTarefa.indexOf(tarefa)}`)
        elemento.style.backgroundColor = 'green'
        // elemento.style.border
    }

    return (
        <div className={Styles.lista}>
            {/* Título da lista */}
            <h1>Minha Lista Diária</h1>
            <p>Nota: Ao clicar na tarefas ela é marcada como concluída</p>
            <div>
                <input type="text" name="" id="buscar" placeholder='Buscar tarefa'/>
                <Button style={Styles.add} texto='Buscar' func= {()=> buscar()}/>
            </div>
            {/* Formulário para adicionar tarefas */}
            <form onSubmit={envioTarefa}>
                {/* Input para adicionar tarefas */}
                <input
                    type="text"
                    placeholder="Adicionar nova tarefa"
                    value={novaTarefa}
                    onChange={(event) => setNovaTarefa(event.target.value)}
                />
                {/* Botão para adicionar tarefas */}
                <Button style={Styles.add} texto='Adicionar' tipo={"submit"}/>
            </form>
            {/* Lista de tarefas */}
            <ul>    
                {tarefas.map((task, index) => (
                    <div className={Styles.elementos}>
                        {/* Para cada tarefa no array é construido uma <li> com um componente botão para edição e deleção
                        também é criado um <input> para a edição da tarefa */}
                        <li key={index} id={`elemento${index}`} onClick={() => concluirTarefa(index)}>
                                {task}
                        </li>
                        <Button style={Styles.delete} texto='Deletar' key={index} func= {() => deletar(index)} />
                        <Button style={Styles.edit} texto='Editar' key={index} func= {() => editarTarefa(index)} />
                        <input id="edicao" className={Styles.edicao} type="text" placeholder="Edite aqui" ></input>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List