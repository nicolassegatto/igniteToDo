import styles from './Counter.module.css'

interface counterProps {
  id : 'total' | 'concluido',
  total: number,
  concluido: number,
}


export function Counter({id, total, concluido} : counterProps){
 return(
  <span className={styles.counter}>{id === 'total' ? (total) : (`${concluido} de ${total}`)}</span>
 )
}