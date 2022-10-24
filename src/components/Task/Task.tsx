import { Checkbox } from '../Checkbox/Checkbox'
import { Lixeira } from '../Lixeira/Lixeira'
import styles from  './Task.module.css'

interface TaskProps {
  done: boolean,
  task: string
}

export function Task({done, task}: TaskProps){
  return(
    <div className={styles.task} >
      <Checkbox done={done} />
      <label className={done ? styles.taskLabelChecked : styles.taskLabel}>{task}</label>
      <Lixeira/>
    </div>
  )
}