import { useState } from 'react';
import styles from './Panel.module.css'
import { TaskCard } from './TaskCard';

export function Panel({tasks}) {

    var [taskList, setTaskList] = useState(tasks)

    // This function will really delete tha task from the list
    function deleteTask(taskToDelete) {
      const tasksWithoutDeletedOne = taskList.filter(task => {
        return task.content !== taskToDelete
      })
      setTaskList(tasksWithoutDeletedOne)
    }

    return (
        <div className={styles.panel}>
          { taskList.map(task => {
          return (
            <TaskCard
              key={task.id}
              content={task.content}
              status={task.status}
              onDeleteTask={deleteTask}/>
          )
        })}
        </div>
    )
}