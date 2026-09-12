import clsx from 'clsx'
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './index.module.scss'

type ButtonProps = PropsWithChildren<{
    className?: string
    theme?: string
}> &
    ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...props
}) => {
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
