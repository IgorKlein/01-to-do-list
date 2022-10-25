import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { InfoPanel } from './components/InfoPanel';
import { Panel } from './components/Panel';

const Tasks = [
  {
    id: 1,
    content: 'Tarefa de número 01.',
    status: false,
  },
  {
    id: 2,
    content: 'Tarefa de número 02.',
    status: false
  },
  {
    id: 3,
    content: 'Tarefa de número 03.',
    status: true
  },
  {
    id: 4,
    content: 'Tarefa de número 04.',
    status: true
  },
]

export default function App() {

  return (
    <header className={styles.wrapper}>
      <Header />
      <main className={styles.mainContent}>
        <InputForm />
        <InfoPanel tasks={Tasks}/>
        <Panel tasks={Tasks}/>
      </main>
    </header>
  )
}
