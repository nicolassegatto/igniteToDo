import styles from  './Checkbox.module.css'
import { ChangeEvent } from 'react'

interface checked {
  done: (valor: boolean) => void
}

export function Checkbox({done}: checked){

  function checkValue(event: ChangeEvent<HTMLInputElement>) {
    done(event.target.checked)
  }

  return(
    <div>
      <input className={styles.inputCheck} type="checkbox" onChange={checkValue} />
    </div>
  )
}