import type { FC } from 'react'
import { useDispatch } from 'react-redux'

import { toggleTask } from '@entities/task'
import styles from '@entities/task/ui/TaskCard/index.module.scss'

import { InputCheckbox } from '@shared/ui/InputCheckbox'

type ToggleTaskAction = {
    id: number
    completed: boolean
    activeDayId: number
    disabled: boolean
}

export const ToggleTask: FC<ToggleTaskAction> = ({
    id,
    completed,
    activeDayId,
    disabled,
}) => {
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(toggleTask({ id: id, dayId: activeDayId }))
    }

    return (
        <InputCheckbox
            className={styles.checkbox}
            completed={completed}
            onCheckedChange={handleChange}
            disabled={disabled}
        />
    )
}
