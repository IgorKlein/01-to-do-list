import styles from './TaskCard.module.css';

export function TaskCard( { id, content, isDone, onDeleteTask, onChangeStatus } ) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleChangeStatusTask() {
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
                        onChange={handleChangeStatusTask}
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