import clsx from 'clsx'
import type { FC, KeyboardEvent, FocusEvent } from 'react'

import styles from './index.module.scss'

type InputProps = {
    value: string
    placeholder?: string
    className?: string
    onValueChange: (value: string) => void
    onKeyDown?: (event: KeyboardEvent) => void
    onBlur?: (event: FocusEvent) => void
    autoFocus?: boolean
}

export const InputText: FC<InputProps> = ({
    className,
    value,
    placeholder,
    onValueChange,
    onKeyDown,
    onBlur,
    autoFocus,
}) => {
    return (
        <input
            type='text'
            className={clsx(styles.input, className)}
            value={value}
            placeholder={placeholder}
            onChange={(event) => onValueChange(event.currentTarget.value)}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            autoFocus={autoFocus}
        />
    )
}
