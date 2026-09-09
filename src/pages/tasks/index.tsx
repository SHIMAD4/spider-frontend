import styles from './index.module.scss'
import { TaskBoard } from '@widgets/TaskBoard'

function TasksPage() {
    return (
        <div className={styles.main}>
            <TaskBoard />
        </div>
    )
}

export default TasksPage
