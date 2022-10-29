import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Panel } from './components/Panel';
import { useState } from 'react';

const Tasks = [
  {
    id: 1666689290093,
    content: 'Tarefa de número 01.',
    isDone: false,
  },
  {
    id: 1666689314752,
    content: 'Tarefa de número 02.',
    isDone: false
  },
  {
    id: 1666689314753,
    content: 'Tarefa de número 03.',
    isDone: true
  },
  {
    id: 1666689314754,
    content: 'Tarefa de número 04.',
    isDone: true
  },
]

export default function App() {

  var [taskList, setTaskList] = useState(Tasks);

  // This function will really delete tha task from the list
  function refreshTasks(tasks) {
    setTaskList(tasks)
    // tasks.forEach(task => console.log(task))     
    // console.log(`TaskList from App Component: ${tasks}`)
  }

  return (
    <header className={styles.wrapper}>
      <Header />
      <main className={styles.mainContent}>
        <InputForm />
        <Panel 
          tasks={taskList}
          onRefreshApp={refreshTasks}/>
      </main>
    </header>
  )
}
