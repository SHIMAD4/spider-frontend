import type { TaskDay } from './taskSlice.ts'

type StateWithTasks = {
    tasks: TaskDay[]
}

export const selectorTasks = (state: StateWithTasks) => state.tasks
