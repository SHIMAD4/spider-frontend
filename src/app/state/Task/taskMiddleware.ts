import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { addTask, deleteTask, toggleTask, setTag } from '@entities/task'

import type { RootStateType } from '../store.ts'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(addTask, toggleTask, deleteTask, setTag),
    effect: async (_, listenerApi) => {
        const { tasks } = listenerApi.getState() as RootStateType

        localStorage.setItem('days', JSON.stringify(tasks))
    },
})
