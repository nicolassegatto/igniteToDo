import { ChangeEvent, useState } from 'react'
import { Button } from '../Button/Button'
import styles from './Input.module.css'

interface InputProps {
  addTask : (taskToAdd: string) => void
}

export function Input({addTask} : InputProps) {

  const [newTask, setNewTask] = useState<string>('')

  function handleNewTask(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  function handleAddTask(){
    if(newTask === ''){
      alert("A tarefa deve ser preenchida")
    }else{
      addTask(newTask)
      setNewTask('')
    }
    
  }

  return(
    <form className={styles.formText}>
      <input 
        className={styles.InputText} 
        value={newTask} 
        required 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask} 
      />

      <Button disable={newTask === ''} click={handleAddTask} />
    </form>
    
  )
}