import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { addTask, deleteTask, toggleTask } from '@entities/task'

import type { RootStateType } from '../store.ts'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(addTask, toggleTask, deleteTask),
    effect: async (_, listenerApi) => {
        const { tasks } = listenerApi.getState() as RootStateType

        localStorage.setItem('days', JSON.stringify(tasks))
    },
})
