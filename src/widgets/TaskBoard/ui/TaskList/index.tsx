import type { FC } from 'react'
import type { TaskListProps } from '../../../../entities/task/model/taskTypes.ts'
import { TaskCard } from '../../../../entities/task/ui/TaskCard'
import { ToggleTask } from '../../../../features/task/ToggleTask'
import { DeleteTask } from '../../../../features/task/DeleteTask'
import { DateTitle } from '../../../../shared/ui/DateTitle'
import styles from './index.module.scss'

export const TaskList: FC<TaskListProps> = ({
    tasks,
    date,
    activeDayId,
    theme,
}) => {
    return (
        <div className={styles.taskWidget}>
            <DateTitle dateISO={date} theme={theme} />
            <ul className={styles.taskList}>
                {tasks.map(({ id, text, completed }, index) => (
                    <li key={id} className={styles.taskItem}>
                        <TaskCard
                            text={text}
                            position={index + 1}
                            before={
                                <ToggleTask
                                    id={id}
                                    completed={completed}
                                    activeDayId={activeDayId}
                                />
                            }
                            after={
                                <DeleteTask id={id} activeDayId={activeDayId} />
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
