import { PlusCircle } from 'phosphor-react'
import styles from './Button.module.css'

export function Button(){
  return(
    <button className={styles['btn-create']} >
      Criar <PlusCircle size={20}/>
    </button>
  )
}