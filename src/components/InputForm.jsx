import { useState } from 'react';
import styles from './InputForm.module.css'
import plusIcon from "../assets/plus-icon.svg"

export function InputForm( {onAddTask} ) {

    const [newTaskContent, setNewTaskContent] = useState('')

    function handleAddNewTask(event) {
        event.preventDefault();
        const content = event.target.content.value
        onAddTask(content)
        setNewTaskContent("")
    }

    function handleNewTextContentChange(event) {
        const newTextContent = event.target.value
        setNewTaskContent(newTextContent)
    }

    function handleNewInvalidContent(event) {
        event.target.setCustomValidity('Esse campo é obrigatório.')
    }

    return (
        <form onSubmit={handleAddNewTask} className={styles.inputForm}>
            <input
                type="text"
                name="content" 
                placeholder="Adicione uma nova tarefa"
                value={newTaskContent}
                onChange={handleNewTextContentChange}
                onInvalid={handleNewInvalidContent}
                required
            />
            
            <button type="submit">
                <p>Criar</p>
                <img src={plusIcon}/>
            </button>
            
        </form>
    )
}