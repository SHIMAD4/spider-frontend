import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TaskTypes } from './taskTypes.ts'

interface TaskSlice {
    tasks: TaskTypes[]
}

const initialTasks = localStorage.getItem('tasks')
const initialState: TaskSlice = {
    tasks: initialTasks ? JSON.parse(initialTasks) : [],
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskTypes>) => {
            state.tasks.push(action.payload)
        },
        toggleTask: (state, action: PayloadAction<TaskTypes['id']>) => {
            const task = state.tasks.find((task) => task.id === action.payload)

            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action: PayloadAction<TaskTypes['id']>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload,
            )
        },
    },
})

export const { addTask, toggleTask, deleteTask } = taskSlice.actions
export const taskReducer = taskSlice.reducer
