import React, { useState, MouseEvent } from 'react';
import styles from './TaskCard.module.css';

export function TaskCard( { key, content, status, deleteTask } ) {

    var [ isSelected, setIsSelected ] = useState( status )

    function handleDeleteTask() {
        console.log(event)
        // deleteTask(content)
    }

    function changeStatusTask() {
        console.log(isSelected)
        setIsSelected((state)=>{
            console.log(state)
            return !state
        })
        // console.log(isSelected ? "Checkbox marcado." : "Checkbox desmarcado.")
        console.log(isSelected)
    }

    return (
        <div className={styles.taskCard}>
            <div>
                <label className={styles.container}>
                    <input
                        type="checkbox"
                        name="task"
                        // value="checked"
                        checked={isSelected}
                        onChange={changeStatusTask}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            <span 
                className={styles.content}
                style={
                    isSelected ?
                    {textDecorationLine: 'line-through'} :
                    {textDecorationLine: 'none'}}>
                {content}
            </span>
            </div>
            <a onClick={handleDeleteTask}>
                <img 
                    src="./src/assets/trash-icon.svg"
                    alt=""  
                />
            </a>            
        </div>
    );
}