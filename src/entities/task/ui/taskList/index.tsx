import { Task } from '../taskCard'
import type { TaskListProps, TaskTypes } from '../../model/taskTypes.ts'
import styles from './index.module.scss'
import type { FC } from 'react'
import { DateTitle } from '../../../../shared/ui/dateTitle'

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
    return (
        <ul className={styles.taskList}>
            <DateTitle />
            {tasks.map((task: TaskTypes, index) => (
                <li className={styles.taskItem}>
                    <Task text={task} listIndex={index} />
                </li>
            ))}
        </ul>
    )
}
