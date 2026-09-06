import styles from './index.module.scss'
import type { FC } from 'react'

export const DateTitle: FC<{ dateISO: string; theme: string }> = ({
    dateISO,
    theme,
}) => {
    const dateFromISO = new Date(dateISO)
    const formattedDate = dateFromISO.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <p className={styles.title} data-state={theme}>
            {formattedDate}
        </p>
    )
}
