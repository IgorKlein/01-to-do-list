import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { InfoPanel } from './components/InfoPanel';
import { Panel } from './components/Panel';
import { useState } from 'react';

const Tasks = [
  {
    id: 1666689290093,
    content: 'Tarefa de número 01.',
    status: false,
  },
  {
    id: 1666689314752,
    content: 'Tarefa de número 02.',
    status: false
  },
  {
    id: 1666689314753,
    content: 'Tarefa de número 03.',
    status: true
  },
  {
    id: 1666689314754,
    content: 'Tarefa de número 04.',
    status: true
  },
]

export default function App() {

  var [taskList, setTaskList] = useState(Tasks);

  // This function will really delete tha task from the list
  function refreshTasks(tasks) {
    setTaskList(tasks)
    console.log(`TaskList from App Component: ${tasks}`)
  }

  function onRefreshCounter() {
    return taskList.length
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
