import { type FC, useLayoutEffect, useRef, useState } from 'react'

import type { TaskDay } from '@entities/task'

import { Button } from '@shared/ui/Button'
import { Icons } from '@shared/ui/Icons'

import { getActiveDayState, getDayTheme } from '../../lib'
import { TaskList } from '../TaskList'
import styles from './index.module.scss'

type CarouselProps = {
    activeDayId: number
    todayId: number | null
    data: TaskDay[]
    onChangeDayId: (day: number) => void
}

const PAGE_WIDTH = 550
const PAGE_GAP = 26
const STEP = PAGE_WIDTH + PAGE_GAP

// TODO: Посмотреть, возможно декомпозиция нужна
export const Carousel: FC<CarouselProps> = ({
    activeDayId,
    todayId,
    data,
    onChangeDayId,
}) => {
    const [isReady, setIsReady] = useState(false)
    const windowRef = useRef<HTMLDivElement>(null)
    const [windowWidth, setWindowWidth] = useState(0)

    const currentIndex = data.findIndex((list) => list.id === activeDayId)

    useLayoutEffect(() => {
        if (!windowRef.current) return

        const observer = new ResizeObserver(([entry]) => {
            setWindowWidth(entry.contentRect.width)

            requestAnimationFrame(() => {
                setIsReady(true)
            })
        })

        observer.observe(windowRef.current)

        return () => observer.disconnect()
    }, [])

    if (currentIndex === -1) {
        return <p>Индекс дня не найден</p>
    }

    const offset = windowWidth / 2 - currentIndex * STEP - PAGE_WIDTH / 2

    const hasPrev = currentIndex > 0
    const hasNext = currentIndex < data.length - 1

    const handlePrevClick = () => {
        if (!hasPrev) return

        const prevIndex = currentIndex - 1
        const prevDayId = data[prevIndex]?.id

        if (prevDayId) onChangeDayId(prevDayId)
    }

    const handleNextClick = () => {
        if (!hasNext) return

        const nextIndex = currentIndex + 1
        const nextDayId = data[nextIndex]?.id

        if (nextDayId) onChangeDayId(nextDayId)
    }

    return (
        <div className={styles.carousel}>
            <Button
                className={styles.carouselButton}
                onClick={handlePrevClick}
                disabled={!hasPrev}
            >
                <Icons.Arrow
                    size={24 * 4}
                    style={{ transform: 'rotate(180deg)' }}
                />
            </Button>

            <div ref={windowRef} className={styles.carouselWindow}>
                <ul
                    className={styles.carouselData}
                    style={{
                        transform: `translateX(${offset}px)`,
                        transition: isReady
                            ? 'transform 0.2s ease-in-out'
                            : 'none',
                    }}
                >
                    {data.map((list) => {
                        const dayTheme = getDayTheme(list.id, todayId)
                        const isActiveDay = getActiveDayState(
                            activeDayId,
                            list.id,
                            todayId,
                        )

                        return (
                            <li
                                key={list.id}
                                className={styles.carouselItem}
                                data-state={dayTheme}
                                data-active={isActiveDay}
                            >
                                <TaskList
                                    tasks={list.tasks}
                                    date={list.date}
                                    activeDayId={activeDayId}
                                    isActiveDay={isActiveDay}
                                    theme={dayTheme}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <Button
                className={styles.carouselButton}
                onClick={handleNextClick}
                disabled={!hasNext}
            >
                <Icons.Arrow size={96} />
            </Button>
        </div>
    )
}
