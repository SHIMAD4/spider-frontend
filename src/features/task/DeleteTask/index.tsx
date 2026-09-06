import { deleteTask } from '../../../entities/task/model/taskSlice.ts'
import type { FC } from 'react'
import { useAppDispatch } from '../../../app/store/hooks.ts'

type DeleteTaskAction = {
    id: number
    activeDayId: number
}

export const DeleteTask: FC<DeleteTaskAction> = ({ id, activeDayId }) => {
    const dispatch = useAppDispatch()

    const handleDeleteTask = () => {
        dispatch(deleteTask({ id: id, dayId: activeDayId }))
    }

    return <button onClick={handleDeleteTask}>x</button>
}
