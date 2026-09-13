import type { FC } from 'react'

import {
    AddTaskTag,
    DeleteTask,
    EditTaskTag,
    ToggleTask,
} from '@features/tasks'
import type { TaskListProps } from '@entities/task'
import { TaskCard } from '@entities/task'
import { DateTitle } from '@shared/ui/DateTitle'

import styles from './index.module.scss'

// TODO: Проверить, возможно пропс theme не нужен в проекте
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
                {tasks.map(({ id, text, completed, tag }, index) => (
                    <li key={id} className={styles.taskItem}>
                        <TaskCard
                            text={text}
                            position={index + 1}
                            disabled={!isActiveDay}
                            before={
                                <ToggleTask
                                    id={id}
                                    completed={completed}
                                    activeDayId={activeDayId}
                                    disabled={!isActiveDay}
                                />
                            }
                            after={
                                <>
                                    <AddTaskTag
                                        taskId={id}
                                        activeDayId={activeDayId}
                                        theme={theme}
                                        disabled={!isActiveDay}
                                        tag={tag}
                                    />
                                    {tag && (
                                        <EditTaskTag
                                            taskId={id}
                                            dayId={activeDayId}
                                            completed={completed}
                                            tag={tag}
                                            theme={theme}
                                            disabled={!isActiveDay}
                                        />
                                    )}
                                    <DeleteTask
                                        id={id}
                                        activeDayId={activeDayId}
                                        theme={theme}
                                        disabled={!isActiveDay}
                                    />
                                </>
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
