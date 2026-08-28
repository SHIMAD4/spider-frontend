import type { FC } from 'react'
import type { TaskProps } from '../../model/taskTypes.ts'

export const Task: FC<TaskProps> = ({ text, listIndex }) => {
    if (!listIndex && listIndex !== 0) {
        return <p>{text}</p>
    }

    return (
        <p>
            {listIndex + 1}. {text}
        </p>
    )
}
