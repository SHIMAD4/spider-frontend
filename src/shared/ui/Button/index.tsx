import styles from './index.module.scss'
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

type ButtonProps = PropsWithChildren<{
    className?: string
    theme?: string
}> &
    ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ className, children, theme, ...props }) => {
    return (
        <button
            {...props}
            className={clsx(styles.button, className)}
            data-state={theme}
        >
            {children}
        </button>
    )
}
