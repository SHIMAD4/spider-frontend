import type { ReactNode } from 'react'

export type TaskListProps = {
    tasks: TaskTypes[]
}

export type TaskProps = {
    id: string
    text: string
    position?: number
    completed: boolean
    before?: ReactNode
    after?: ReactNode
}

export type TaskTypes = {
    id: string
    text: string
    completed: boolean
}
