import styles from './Panel.module.css'
import { TaskCard } from './TaskCard';

export function Panel(
  {
    tasks,
    onDeleteTask,
    onChangeStatus
  }
){
    const tasksCounter = tasks.length
    const tasksDoneCounter = tasks.filter(task => task.isDone === true).length

    function onDeleteTaskProps(id) {
      onDeleteTask(id)
    }

    function onChangeStatusProps(id) {
      onChangeStatus(id)
    }

    return (
        <main>
          <div className={styles.container}>
            <div className={styles.summary}>
              <h2 className={styles.created}>Tarefas criadas</h2>
              <div className={styles.counter}>
                <p>{tasksCounter}</p>
              </div>
            </div>
            <div className={styles.summary}>
              <h2 className={styles.done}>Concluídas</h2>
              <div className={styles.counter}>
                <p>{tasksDoneCounter}</p>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            { tasks.map(task => {
            return (
              <TaskCard
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDeleteTask={onDeleteTaskProps}
                onChangeStatus={onChangeStatusProps}
              />
            )
            })}
          </div>
        </main>
        
    )
}