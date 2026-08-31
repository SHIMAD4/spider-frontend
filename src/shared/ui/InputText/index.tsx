import styles from './index.module.scss'
import { type FC } from 'react'

type InputProps = {
    value: string
    placeholder?: string
    onValueChange: (value: string) => void
}

export const InputText: FC<InputProps> = ({
    value,
    placeholder,
    onValueChange,
}) => {
    return (
        <input
            type='text'
            className={styles.input}
            value={value}
            placeholder={placeholder}
            onChange={(event) => onValueChange(event.currentTarget.value)}
        />
    )
}
