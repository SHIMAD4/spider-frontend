import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {
    addTask,
    toggleTask,
    deleteTask,
} from '../../../entities/task/model/taskSlice.ts'
import type { RootStateType } from '../store.ts'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(addTask, toggleTask, deleteTask),
    effect: async (_, listenerApi) => {
        const { tasks } = listenerApi.getState() as RootStateType

        localStorage.setItem('tasks', JSON.stringify(tasks.tasks))
    },
})
