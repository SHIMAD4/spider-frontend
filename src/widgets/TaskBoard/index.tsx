import { AddTask } from '../../features/task/AddTask'
import { Carousel } from './ui/Carousel'
import { useAppSelector } from '../../app/store/hooks.ts'
import { selectorTasks } from '../../entities/task/model/taskSelectors.ts'
import { useEffect, useState } from 'react'

export const TaskBoard = () => {
    const data = useAppSelector(selectorTasks)

    // toISOString высчитывает дату по часовому поясу, нужно заменить на что-то что будет отдавать локальное время пользователя
    const today = new Date().toISOString().slice(0, 10)
    const todayIndex = data.findIndex((list) => list.date === today)
    const todayId = data[todayIndex]?.id ?? null

    const [activeDayId, setActiveDayId] = useState<number | null>(todayId)

    useEffect(() => {
        if (todayId !== null && activeDayId === null) {
            setActiveDayId(todayId)
        }
    }, [todayId])

    return (
        <>
            {activeDayId !== null && <AddTask activeDayId={activeDayId} />}
            {data.length > 0 && activeDayId !== null && (
                <Carousel
                    data={data}
                    todayId={todayId}
                    activeDayId={activeDayId}
                    onChangeDayId={setActiveDayId}
                />
            )}
        </>
    )
}
