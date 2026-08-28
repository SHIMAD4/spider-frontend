import styles from './index.module.scss'
import type { FC, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
    className?: string
}>

export const Button: FC<ButtonProps> = ({ children }) => {
    return <button className={styles.button}>{children}</button>
}
