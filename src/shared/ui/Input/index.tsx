import styles from './index.module.scss'
import type { FC } from 'react'

type InputProps = {
    placeholder?: string
}

export const Input: FC<InputProps> = ({ placeholder }) => {
    return (
        <input className={styles.input} type='text' placeholder={placeholder} />
    )
}
