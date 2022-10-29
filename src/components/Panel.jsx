import { useState } from 'react';
import styles from './Panel.module.css'
import { TaskCard } from './TaskCard';

export function Panel({tasks, onRefreshApp}) {

    var [taskList, setTaskList] = useState(tasks)
    var [taskCounter, setTaskCounter] = useState(
      [taskList.length, tasks.filter(task => task.isDone === true).length])

    function refreshApp(tasks) {
      setTaskList(tasks)
      setTaskCounter(
        [tasks.length, tasks.filter(task => task.isDone === true).length]
      )
      onRefreshApp(tasks)
    }

    // This function will really delete tha task from the list
    function deleteTask(taskIdToDelete) {
      const tasksWithoutDeletedOne = taskList.filter(task => {
        return task.id !== taskIdToDelete
      })

      console.log(`Apos deletar, o array fica da seguinte forma:`)
      console.log(tasksWithoutDeletedOne)

      refreshApp(tasksWithoutDeletedOne)
    }

    function changeStatusTask(taskId) {
      const refreshedTaskList = taskList.map(task => {
        if (task.id === taskId) {
          task.isDone = !task.isDone
          console.log(`Alterado status da tarefa ${task.content} para ${task.isDone}`)
        }
        return task
      })
      refreshApp(refreshedTaskList)
    }

    return (
        <main>
          <div className={styles.container}>
            <div className={styles.summary}>
              <h2 className={styles.created}>Tarefas criadas</h2>
              <div className={styles.counter}>
                <p>{taskCounter[0]}</p>
              </div>
            </div>
            <div className={styles.summary}>
              <h2 className={styles.done}>Concluídas</h2>
              <div className={styles.counter}>
                <p>{taskCounter[1]}</p>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            { taskList.map(task => {
            return (
              <TaskCard
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDeleteTask={deleteTask}
                onChangeStatus={changeStatusTask}
              />
            )
            })}
          </div>
        </main>
        
    )
}