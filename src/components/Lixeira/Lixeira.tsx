
import { Trash } from 'phosphor-react'
import styles from  './Lixeira.module.css'

interface trashProps {
  deletar: () =>void
}

export function Lixeira({deletar} : trashProps){

  function handleDeleteTask(){
    deletar()
  }

  return(
    <button className={styles.trashButton} onClick={handleDeleteTask}>
      <Trash className={styles.trash}/>
    </button>
  )
}