import { deleteTask } from '@entities/task/model/taskSlice.ts'
import type { FC } from 'react'
import { useAppDispatch } from '@app/store/hooks.ts'
import { Button } from '@shared/ui/Button'
import styles from './index.module.scss'
import { Icons } from '@shared/ui/Icons'

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
    const dispatch = useAppDispatch()

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
