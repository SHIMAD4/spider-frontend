import { TaskBoard } from '@widgets/TaskBoard'

import styles from './index.module.scss'

export const TasksPage = () => {
    return (
        <div className={styles.main}>
            <TaskBoard />
        </div>
    )
}
