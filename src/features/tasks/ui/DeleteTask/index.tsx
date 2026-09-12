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
    disabled: boolean
}

export const DeleteTask: FC<DeleteTaskAction> = ({
    id,
    activeDayId,
    theme,
    disabled,
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
            disabled={disabled}
        >
            <Icons.Cross size={16} />
        </Button>
    )
}
