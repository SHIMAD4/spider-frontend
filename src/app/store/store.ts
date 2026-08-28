import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from '../../entities/task/model/taskSlice.ts'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
