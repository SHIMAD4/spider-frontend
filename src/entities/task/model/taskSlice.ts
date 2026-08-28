import { createSlice } from '@reduxjs/toolkit'
import type { TaskTypes } from './taskTypes.ts'

interface TaskSlice {
    tasks: TaskTypes[]
}

const initialState: TaskSlice = {
    tasks: ['Hello', 'World'],
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
})

export const taskReducer = taskSlice.reducer
