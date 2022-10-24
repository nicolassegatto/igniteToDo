import { Button } from "../components/Button/Button";
import { Counter } from "../components/Counter/Counter";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import styles from './Home.module.css'
import { Task } from "../components/Task/Task";
import { EmptyTask } from "../components/Emptytask/Emptytask";

export function Home() {

  let task = 1;

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
            <span className={styles.createdTasks}>Tarefas criadas <Counter /> </span>
            <span className={styles.concluedTasks}>Concluidas <Counter /> </span>
          </div>

          {task <= 0 ? (
            <EmptyTask />
          ) : (
            <div className={styles.tasks}>
              <Task />
              <Task />
            </div>
          )}
        </div>

      </main>
    </div>
  )
}