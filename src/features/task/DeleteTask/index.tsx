import { deleteTask } from '../../../entities/task/model/taskSlice.ts'
import type { FC } from 'react'
import { useAppDispatch } from '../../../app/store/hooks.ts'

type DeleteTaskAction = {
    id: string
}

export const DeleteTask: FC<DeleteTaskAction> = ({ id }) => {
    const dispatch = useAppDispatch()

    const handleDeleteTask = () => {
        dispatch(deleteTask(id))
    }

    return <button onClick={handleDeleteTask}>x</button>
}
