import type { FC } from 'react'

import { DeleteTask, ToggleTask } from '@features/tasks'

import type { TaskListProps } from '@entities/task'
import { TaskCard } from '@entities/task'

import { DateTitle } from '@shared/ui/DateTitle'

import styles from './index.module.scss'

export const TaskList: FC<TaskListProps> = ({
    tasks,
    date,
    activeDayId,
    isActiveDay,
    theme,
}) => {
    return (
        <div className={styles.taskWidget} data-active={isActiveDay}>
            <DateTitle dateISO={date} theme={theme} isActiveDay={isActiveDay} />

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
                                <DeleteTask
                                    id={id}
                                    activeDayId={activeDayId}
                                    theme={theme}
                                />
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
