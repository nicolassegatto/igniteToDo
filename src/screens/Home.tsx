import { Counter } from "../components/Counter/Counter";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import styles from './Home.module.css'
import { Task } from "../components/Task/Task";
import { EmptyTask } from "../components/Emptytask/Emptytask";
import { useState } from "react";

/*
{
      id: 1,
      done: true,
      task: 'Fazer Bot de vendas com interface amigavel e valores aplicados automaticamente pelas APIS, demanda Marcelo.'
    }
*/

interface ListsProps {
  id: number,
  done: boolean,
  task: string
}

export function Home() {

  const [task, setTask] = useState<ListsProps[]>([])
  const total = task.length
  const concluido = task.filter(OBJ => { return OBJ.done === true }).length

  function handleAddTask(taskToAdd: string){
    const taskModule = {
      id:  task.length + 1,
      done: false,
      task: taskToAdd
    }
    setTask([...task, taskModule]);
  }

  function handleCheckTask(id:number, status: boolean) {
    const tasksChecked = task.map(OBJ => {
      if (OBJ.id == id){
        OBJ.done = status
      }
      return OBJ
    })
    setTask(tasksChecked)
  }

  function handleDeletTask(taskToDelet:number){
    const taskWithoutDeleted = task.filter(OBJ => {
      return OBJ.id !== taskToDelet
    })
    setTask(taskWithoutDeleted)
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>

        <div>
          <Input addTask={handleAddTask}/>
        </div>

        <div className={styles.formTasks}>

          <div className={styles.counterTasks}>
            <span className={styles.createdTasks}>Tarefas criadas <Counter id={'total'} total={total} concluido={concluido} /> </span>
            <span className={styles.concluedTasks}>Concluidas <Counter id={'concluido'} total={total} concluido={concluido} /> </span>
          </div>

          {task.length <= 0 ? (<EmptyTask />) : (
            <div className={styles.tasks}>
              {task.map(task => {
                return (
                  <Task 
                    key={task.id} 
                    done={task.done} 
                    task={task.task} 
                    id={task.id}
                    onCheck={handleCheckTask}
                    onDelet={handleDeletTask}
                  />
                )
              })}
            </div>
          )}
        </div>

      </main>
    </div>
  )
}