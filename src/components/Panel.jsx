import { useState } from 'react';
import styles from './Panel.module.css'
import { TaskCard } from './TaskCard';

export function Panel({tasks}) {

    var [taskList, setTaskList] = useState(tasks)
    var [taskCounter, setTaskCounter] = useState(tasks.length)

    // This function will really delete tha task from the list
    function deleteTask(taskToDelete) {
      const tasksWithoutDeletedOne = taskList.filter(task => {
        return task.content !== taskToDelete
      })
      setTaskList(tasksWithoutDeletedOne)
      setTaskCounter(tasksWithoutDeletedOne.length)
    }

    return (
        <main>
          <div className={styles.container}>
            <div className={styles.summary}>
              <h2 className={styles.created}>Tarefas criadas</h2>
              <div className={styles.counter}>
                <p>{taskCounter}</p>
              </div>
            </div>
            <div className={styles.summary}>
              <h2 className={styles.done}>Concluídas</h2>
              <div className={styles.counter}>
                <p>2</p>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            { taskList.map(task => {
            return (
              <TaskCard
                key={task.id}
                content={task.content}
                status={task.status}
                onDeleteTask={deleteTask}
              />
            )
            })}
          </div>
        </main>
        
    )
}