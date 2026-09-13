export type TaskListProps = {
    activeDayId: number
    isActiveDay: boolean
    tasks: TaskTypes[]
    date: string
    theme?: string
}

export type TaskTypes = {
    id: number
    text: string
    completed: boolean
    tag?: TaskTag | null
}

export type TaskTag = {
    id: number
    text: string
}

export type PayloadActionType = {
    id: number
    text: string
    completed: boolean
    dayId: number
    tag?: TaskTag | null
}
