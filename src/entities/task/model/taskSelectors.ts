import type { TaskDay } from './taskSlice.ts'

type selectorTasksType = {
    tasks: TaskDay[]
}

export const selectorTasks = (state: selectorTasksType) => state.tasks
