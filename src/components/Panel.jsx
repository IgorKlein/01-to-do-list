import { useState } from 'react';
import styles from './Panel.module.css'
import { TaskCard } from './TaskCard';

export function Panel({tasks}) {

    var [taskList, setTaskList] = useState(tasks)

    function deleteTask(task) {
        console.log(`Deletar a task: ${task}`)
    }

    return (
        <div className={styles.panel}>
          { taskList.map(task => {
          return (
            <TaskCard
              key={task.id}
              content={task.content}
              status={task.status}/>
          )
        })}
        </div>
    )
}