import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

import styles from './TaskForm.module.css';
import {ITask} from '../interfaces/Task'

interface Props {
  btnText: string,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Taskform = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<number>(0)


  const addTaskHundler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = {id, title, phoneNumber}

    setTaskList!([...taskList, newTask])
    setTitle('')
    setPhoneNumber(0)

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    }else {
      setPhoneNumber(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHundler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>
        Nome: 
        </label>
        <input type="text" name='title' placeholder='Nome do contato' onChange={handleChange} value={title} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='numero'>
        Numero:
        </label>
        <input type="text" name='numero' placeholder='Número do contato' onChange={handleChange} value={phoneNumber}  />
      </div>
      <input type="submit" value={btnText}/>
    </form>
  )
}

export default Taskform