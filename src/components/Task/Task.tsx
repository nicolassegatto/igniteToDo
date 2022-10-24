import { Checkbox } from '../Checkbox/Checkbox'
import { Lixeira } from '../Lixeira/Lixeira'

import styles from  './Task.module.css'

export function Task(){
  return(
    <div className={styles.task} >
      <Checkbox/>
      <label className={styles.taskLabel}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
      <Lixeira/>
    </div>
  )
}