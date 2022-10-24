import { Button } from "../components/Button/Button";
import { Counter } from "../components/Counter/Counter";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import styles from './Home.module.css'
import { Task } from "../components/Task/Task";
import { EmptyTask } from "../components/Emptytask/Emptytask";

interface ListsProps {
  id: number,
  done: boolean,
  task: string
}

const lists: ListsProps[] = [
  {
    id: 1,
    done: true,
    task: 'Fazer Bot de vendas com interface amigavel e valores aplicados automaticamente pelas APIS, demanda Marcelo.'
  },
]

const total = lists.length
const concluido = lists.map(OBJ => {OBJ.done === true}).length

export function Home() {

  return (
    <div>
      <Header />
      <main className={styles.content}>

        <div className={styles.addArea}>
          <Input />
          <Button />
        </div>

        <div className={styles.formTasks}>

          <div className={styles.counterTasks}>
            <span className={styles.createdTasks}>Tarefas criadas <Counter id={'total'} total={total} concluido={concluido}/> </span>
            <span className={styles.concluedTasks}>Concluidas <Counter id={'concluido'} total={total} concluido={concluido} /> </span>
          </div>

          {lists.length <= 0 ? ( <EmptyTask /> ) : (
            <div className={styles.tasks}>
              {lists.map(task => {
                return (
                  <Task key={task.id} done={task.done} task={task.task} />
                )
              })}
            </div>
          )}
        </div>

      </main>
    </div>
  )
}