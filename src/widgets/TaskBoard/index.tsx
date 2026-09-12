import { useState } from 'react'
import { useSelector } from 'react-redux'

import { AddTask } from '@features/tasks'

import { selectorTasks } from '@entities/task'

import { Carousel } from './ui/Carousel'

export const TaskBoard = () => {
    const data = useSelector(selectorTasks)

    const today = new Date().toISOString().slice(0, 10)
    const todayId = data.find((day) => day.date === today)?.id ?? null

    const [selectedDayId, setSelectedDayId] = useState<number | null>(null)

    const activeDayId = selectedDayId ?? todayId

    return (
        <>
            {activeDayId !== null && <AddTask activeDayId={activeDayId} />}
            {data.length > 0 && activeDayId !== null && (
                <Carousel
                    data={data}
                    todayId={todayId}
                    activeDayId={activeDayId}
                    onChangeDayId={setSelectedDayId}
                />
            )}
        </>
    )
}
