import type { FC } from 'react'

import styles from './index.module.scss'

type DataTitleProps = {
    dateISO: string
    theme?: string
    isActiveDay: boolean
}

export const DateTitle: FC<DataTitleProps> = ({
    dateISO,
    theme,
    isActiveDay,
}) => {
    const dateFromISO = new Date(dateISO)
    const formattedDate = dateFromISO.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <p
            className={styles.title}
            data-state={theme}
            data-active={isActiveDay}
        >
            {formattedDate}
        </p>
    )
}
