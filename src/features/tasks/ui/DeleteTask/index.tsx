import type { FC } from 'react'
import { useDispatch } from 'react-redux'

import { deleteTask } from '@entities/task'

import { Button } from '@shared/ui/Button'
import { Icons } from '@shared/ui/Icons'

import styles from './index.module.scss'

type DeleteTaskAction = {
    id: number
    activeDayId: number
    theme?: string
}

export const DeleteTask: FC<DeleteTaskAction> = ({
    id,
    activeDayId,
    theme,
}) => {
    const dispatch = useDispatch()

    const handleDeleteTask = () => {
        dispatch(deleteTask({ id: id, dayId: activeDayId }))
    }

    return (
        <Button
            className={styles.deleteButton}
            onClick={handleDeleteTask}
            theme={theme}
        >
            <Icons.Cross size={16} />
        </Button>
    )
}
