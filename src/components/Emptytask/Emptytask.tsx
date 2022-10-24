import styles from './EmptyTask.module.css'
import { ClipboardText } from "phosphor-react"

export function EmptyTask() {
  return (
    <div className={styles.tasksEmpty}>
      <div>
        <ClipboardText size={56} color="#808080" />
      </div>
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}