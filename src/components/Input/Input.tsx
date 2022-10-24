import styles from './Input.module.css'

export function Input() {

  return(
    <input className={styles.InputText} type="text" placeholder="Adicione uma nova tarefa" />
  )
}