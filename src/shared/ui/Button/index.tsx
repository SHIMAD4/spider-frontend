import styles from './index.module.scss'
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
    className?: string
}> &
    ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    )
}
