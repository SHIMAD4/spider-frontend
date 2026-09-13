import { type FC } from 'react'
import type { KeyboardEvent } from 'react'

import styles from './index.module.scss'

type InputProps = {
    value: string
    placeholder?: string
    onValueChange: (value: string) => void
    onKeyDown?: (event: KeyboardEvent) => void
}

export const InputText: FC<InputProps> = ({
    value,
    placeholder,
    onValueChange,
    onKeyDown,
}) => {
    return (
        <input
            type='text'
            className={styles.input}
            value={value}
            placeholder={placeholder}
            onChange={(event) => onValueChange(event.currentTarget.value)}
            onKeyDown={onKeyDown}
        />
    )
}
