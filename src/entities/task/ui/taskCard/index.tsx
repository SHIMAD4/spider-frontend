import type { FC } from 'react'
import type { TaskProps } from '../../model/taskTypes.ts'
import styles from './index.module.scss'

export const Task: FC<TaskProps> = ({ text, listIndex }) => {
    if (!listIndex && listIndex !== 0) {
        return <p>{text}</p>
    }

    const position = listIndex + 1

    return (
        <div className={styles.task}>
            <div className={styles.inner}>
                <input type='checkbox' className={styles.checkbox} />
                <span className={styles.text}>
                    {position}. {text}
                </span>
            </div>
            <button>x</button>
        </div>
    )
}
