import type { TaskTypes } from './taskTypes.ts'

type selectorTasksType = {
    tasks: {
        tasks: TaskTypes[]
    }
}

export const selectorTasks = (state: selectorTasksType) => state.tasks.tasks
