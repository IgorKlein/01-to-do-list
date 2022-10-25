import { useState } from 'react';
import styles from './InfoPanel.module.css';

export function InfoPanel({ tasks }) {

    let [taskCounter, setTaskCounter] = useState([tasks.length, 2])


    function onRefreshCounter() {
        const tasksDone = tasks.filter(task => task.status === true)
        setTaskCounter([tasks.length, tasksDone.length])
        console.log(tasksDone)
    }

    return (
        <div className={styles.container}>
            <div className={styles.summary}>
                <h2 className={styles.created}>Tarefas criadas</h2>
                <div className={styles.counter}>
                    <p onClick={onRefreshCounter}>{taskCounter[0]}</p>
                </div>
            </div>
            <div className={styles.summary}>
                <h2 className={styles.done}>Concluídas</h2>
                <div className={styles.counter}>
                    <p>{taskCounter[1]}</p>
                </div>
            </div>
        </div>
        
    )
}