export type TaskListProps = {
    activeDayId: number
    tasks: TaskTypes[]
    date: string
    theme?: string
}

export type TaskTypes = {
    id: number
    text: string
    completed: boolean
}

export type PayloadActionType = {
    id: number
    text: string
    completed: boolean
    dayId: number
}
