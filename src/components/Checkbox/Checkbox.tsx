import styles from  './Checkbox.module.css'

export function Checkbox(){
  return(
    <div>
      <input className={styles.inputCheck} type="checkbox" />
    </div>
  )
}