import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from '../../entities/task/model/taskSlice.ts'
import { listenerMiddleware } from './Task/taskMiddleware.ts'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
