import type { FC } from 'react'
import type { TaskListProps } from '../../entities/task/model/taskTypes.ts'
import { TaskCard } from '../../entities/task/ui/TaskCard'
import { ToggleTask } from '../../features/task/ToggleTask'
import { DeleteTask } from '../../features/task/DeleteTask'
import { DateTitle } from '../../shared/ui/DateTitle'
import styles from './index.module.scss'

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className={styles.taskWidget}>
            <DateTitle />
            <ul className={styles.taskList}>
                {tasks.map((task, index) => (
                    <li key={task.id} className={styles.taskItem}>
                        <TaskCard
                            text={task.text}
                            position={index + 1}
                            before={
                                <ToggleTask
                                    id={task.id}
                                    completed={task.completed}
                                />
                            }
                            after={<DeleteTask id={task.id} />}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
