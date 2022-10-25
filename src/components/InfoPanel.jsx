import { useState } from 'react';
import styles from './InfoPanel.module.css';

export function InfoPanel({ totalTasks }) {

    let [taskCounter, setTaskCounter] = useState(totalTasks)

    function refreshCounter() {
    //     const tasksDone = tasks.filter(task => task.status === true)
    //     setTaskCounter([tasks.length, tasksDone.length])
    //     console.log(tasksDone)
    }

    return (
        <div className={styles.container}>
            <div className={styles.summary}>
                <h2 className={styles.created}>Tarefas criadas</h2>
                <div className={styles.counter}>
                    <p onClick={refreshCounter}>{taskCounter}</p>
                </div>
            </div>
            <div className={styles.summary}>
                <h2 className={styles.done}>Concluídas</h2>
                <div className={styles.counter}>
                    <p>2</p>
                </div>
            </div>
        </div>
        
    )
}