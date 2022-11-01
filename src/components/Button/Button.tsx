import { PlusCircle } from 'phosphor-react'
import styles from './Button.module.css'
import {FormEvent} from 'react'

interface ButtonProps {
  click: () => void,
  disable: boolean
}

export function Button({click, disable} : ButtonProps){

  function handleAddTask(event : FormEvent) {
    event.preventDefault();
    click()
  }

  return(
    <button disabled={disable} onClick={handleAddTask} className={styles['btn-create']} >
      Criar <PlusCircle size={20}/>
    </button>
  )
}