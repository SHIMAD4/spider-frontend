import type { FC } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

type InputCheckboxProps = {
    completed: boolean
    onCheckedChange: (completed: boolean) => void
    className?: string
}

export const InputCheckbox: FC<InputCheckboxProps> = ({
    className,
    completed,
    onCheckedChange,
}) => {
    return (
        <input
            type='checkbox'
            className={clsx(styles.inputCheckbox, className)}
            checked={completed}
            onChange={(event) => onCheckedChange(event.currentTarget.checked)}
        />
    )
}
