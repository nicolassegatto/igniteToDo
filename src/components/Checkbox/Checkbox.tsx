import styles from  './Checkbox.module.css'

interface checked {
  done: boolean
}

export function Checkbox({done}: checked){
  return(
    <div>
      <input className={styles.inputCheck} type="checkbox" checked={done}/>
    </div>
  )
}