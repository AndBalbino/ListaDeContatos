import React from 'react'

import { ITask } from '../interfaces/Task'

import styles from './TaskList.module.css'


interface Props  {
  taskList: ITask[]
}

const Tasklist = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
       taskList.map((task) => (
        <div key={task.id} >
        <p>
          {task.title}
        </p>
        </div>
       ))
      ):(<p>Não há contatos cadastrados</p>)}
    </>
  )
}

export default Tasklist