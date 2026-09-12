import { type FC, type ReactNode } from 'react'

import styles from './index.module.scss'

type TaskCardProps = {
    text: string
    position: number
    disabled?: boolean
    before?: ReactNode
    after?: ReactNode
}

export const TaskCard: FC<TaskCardProps> = ({
    text,
    position,
    disabled,
    before,
    after,
}) => {
    return (
        <div className={styles.task} data-disabled={disabled}>
            <div className={styles.inner}>
                {before}
                <span className={styles.text}>
                    {position}. {text}
                </span>
            </div>
            {after}
        </div>
    )
}
