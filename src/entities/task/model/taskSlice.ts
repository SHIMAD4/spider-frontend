import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PayloadActionType, TaskTypes } from './taskTypes.ts'
import { generateDays } from '../utils/generateDays.ts'

export interface TaskDay {
    id: number
    tasks: TaskTypes[]
    date: string
}

const initialDays = localStorage.getItem('days')

const initialState: TaskDay[] = initialDays
    ? JSON.parse(initialDays)
    : generateDays()

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<PayloadActionType>) => {
            const day = state.find((day) => day.id === action.payload.dayId)

            if (!day) return

            day.tasks.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed,
            })
        },
        toggleTask: (
            state,
            action: PayloadAction<{
                id: PayloadActionType['id']
                dayId: PayloadActionType['dayId']
            }>,
        ) => {
            const day = state.find((day) => day.id === action.payload.dayId)

            if (!day) return

            const task = day.tasks.find((task) => task.id === action.payload.id)

            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (
            state,
            action: PayloadAction<{
                id: PayloadActionType['id']
                dayId: PayloadActionType['dayId']
            }>,
        ) => {
            const day = state.find((day) => day.id === action.payload.dayId)

            if (!day) return

            day.tasks = day.tasks.filter(
                (task) => task.id !== action.payload.id,
            )
        },
    },
})

export const { addTask, toggleTask, deleteTask } = taskSlice.actions
export const taskReducer = taskSlice.reducer
