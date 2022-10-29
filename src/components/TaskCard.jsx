import React, { useState, MouseEvent } from 'react';
import styles from './TaskCard.module.css';

export function TaskCard( { id, content, isDone, onDeleteTask, onChangeStatus } ) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function changeStatusTask() {
        onChangeStatus(id);
    }

    return (
        <div className={styles.taskCard}>
            <div>
                <label className={styles.container}>
                    <input
                        type="checkbox"
                        name="task"
                        value={isDone}
                        checked={isDone}
                        onChange={changeStatusTask}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            <span 
                className=
                    { isDone ? styles.taskDescriptionDone : styles.taskDescription }>
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