import styles from './index.module.scss'
import { selectorTasks } from '../../entities/task/model/taskSelectors.ts'
import { useAppSelector } from '../../app/store/hooks.ts'
import { AddTask } from '../../features/task/AddTask'
import { TaskList } from '../../widgets/TaskList'

function TasksPage() {
    const data = useAppSelector(selectorTasks)

    return (
        <div className={styles.main}>
            <AddTask />
            <TaskList tasks={data} />
        </div>
    )
}

export default TasksPage
