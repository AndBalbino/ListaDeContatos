import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.css'
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';

import {ITask} from './interfaces/Task'



function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
   <div>
   <Header/>
   <main className={styles.main}>
   <div>
    <h2>Oque você vai fazer?</h2>
    <Taskform btnText='Criar contato' taskList={taskList} setTaskList={setTaskList} />
   </div>
   <div>
    <h2>Seus contatos:</h2>
    <Tasklist taskList={taskList} />
   </div>
   </main>
  <Footer/>
   </div>
  );
}

export default App;
