import React, { useState, MouseEvent } from 'react';
import styles from './TaskCard.module.css';

export function TaskCard( { key, content, status, onDeleteTask } ) {

    var [ isSelected, setIsSelected ] = useState( status )

    function handleDeleteTask() {
        onDeleteTask(content)
    }

    function changeStatusTask() {

        setIsSelected((state)=>{
            return !state
        })
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