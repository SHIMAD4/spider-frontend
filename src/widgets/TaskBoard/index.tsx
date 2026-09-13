import { useState } from 'react'
import { useSelector } from 'react-redux'

import { AddTask } from '@features/tasks'
import { selectorTasks } from '@entities/task'
import { Button } from '@shared/ui/Button'
import { Icons } from '@/shared/ui/Icons'

import { Carousel } from './ui/Carousel'

import styles from './index.module.scss'

export const TaskBoard = () => {
    const data = useSelector(selectorTasks)

    const today = new Date().toISOString().slice(0, 10)
    const todayId = data.find((day) => day.date === today)?.id ?? null

    const [selectedDayId, setSelectedDayId] = useState<number | null>(null)

    const activeDayId = selectedDayId ?? todayId

    const handleBackClick = () => {
        setSelectedDayId(todayId)
    }

    return (
        <>
            <header className={styles.header}>
                {activeDayId !== null && <AddTask activeDayId={activeDayId} />}

                <Button className={styles.backButton} onClick={handleBackClick}>
                    <Icons.Home size={24} className={styles.icon} />
                </Button>
            </header>
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
