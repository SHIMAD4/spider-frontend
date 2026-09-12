import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './index.module.scss'

type ButtonProps = PropsWithChildren<{
    className?: string
    theme?: string
    disabled?: boolean
}> &
    ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    disabled,
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(styles.button, className)}
            data-state={theme}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
