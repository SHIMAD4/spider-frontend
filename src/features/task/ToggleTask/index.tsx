import styles from '../../../entities/task/ui/TaskCard/index.module.scss'
import { useAppDispatch } from '@app/store/hooks.ts'
import { InputCheckbox } from '@shared/ui/InputCheckbox'
import { toggleTask } from '@entities/task/model/taskSlice.ts'
import type { FC } from 'react'

type ToggleTaskAction = {
    id: number
    completed: boolean
    activeDayId: number
}

export const ToggleTask: FC<ToggleTaskAction> = ({
    id,
    completed,
    activeDayId,
}) => {
    const dispatch = useAppDispatch()

    const handleChange = () => {
        dispatch(toggleTask({ id: id, dayId: activeDayId }))
    }

    return (
        <InputCheckbox
            className={styles.checkbox}
            completed={completed}
            onCheckedChange={handleChange}
        />
    )
}
