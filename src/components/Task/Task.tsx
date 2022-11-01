import { useState } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { Lixeira } from '../Lixeira/Lixeira'
import styles from  './Task.module.css'

interface TaskProps {
  id: number,
  done: boolean,
  task: string,
  onDelet: (id:number)=>void,
  onCheck: (id:number, status: boolean) => void
}

export function Task({done, task, id, onDelet, onCheck}: TaskProps){

  function handleCheckBox(valor: boolean){
    onCheck(id, valor)
  }

  function handleDelet(){
    onDelet(id)
  }

  return(
    <div className={styles.task} >
      <Checkbox done={handleCheckBox} />
      <label className={done ? styles.taskLabelChecked : styles.taskLabel}>{task}</label>
      <Lixeira deletar={handleDelet}/>
    </div>
  )
}