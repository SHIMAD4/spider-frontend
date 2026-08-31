import type { FC } from 'react'

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
            className={className}
            checked={completed}
            onChange={(event) => onCheckedChange(event.currentTarget.checked)}
        />
    )
}
