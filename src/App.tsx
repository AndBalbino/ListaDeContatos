import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.css'
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import Modal from './components/Modal';

import {ITask} from './interfaces/Task'



function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updatedTask= (id: number, title: string, phoneNumber: number) => {

      const updatedTask: ITask = {id, title, phoneNumber}

      const updatedItems = taskList.map((task) => {
        return task.id === updatedTask.id ? updatedTask : task
      })

      setTaskList(updatedItems)
      hideOrShowModal(false)
    }

  return (
   <div>
    <Modal children={<Taskform btnText="Editar contato" task={taskToUpdate} taskList={taskList} handleUpdate={updatedTask} />} />
   <Header/>
   <main className={styles.main}>
   <div>
    <h2>Oque você vai fazer?</h2>
    <Taskform btnText='Criar contato' taskList={taskList}  setTaskList={setTaskList}  />
   </div>
   <div>
    <h2>Seus contatos:</h2>
    <Tasklist taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}  />
   </div>
   </main>
  <Footer/>
   </div>
  );
}

export default App;
