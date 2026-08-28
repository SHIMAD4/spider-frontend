import styles from './index.module.scss'
import { Input } from '../../shared/ui/Input'
import { Button } from '../../shared/ui/button'
import { TaskList } from '../../entities/task/ui/taskList'
import { selectorTasks } from '../../entities/task/model/taskSelectors.ts'
import { useAppSelector } from '../../app/store/hooks.ts'

function TasksPage() {
    const data = useAppSelector(selectorTasks)

    return (
        <div className={styles.main}>
            <div className={styles.addTask}>
                <Input placeholder={'Введите текст'} />
                <Button>Добавить задачу</Button>
            </div>
            <TaskList tasks={data} />
        </div>
    )
}

export default TasksPage
