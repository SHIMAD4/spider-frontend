import { type FC, type KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setTag, type TaskTag } from '@entities/task'
import { generateRandomId } from '@shared/lib/generateRandomId.ts'
import { Button } from '@shared/ui/Button'
import { InputText } from '@shared/ui/InputText'
import { Icons } from '@/shared/ui/Icons'

import styles from './index.module.scss'

type AddTaskTagProps = {
    taskId: number
    activeDayId: number
    theme?: string
    disabled: boolean
    tag?: TaskTag | null
}

export const AddTaskTag: FC<AddTaskTagProps> = ({
    taskId,
    activeDayId,
    tag,
    theme,
    disabled,
}) => {
    const [isHidden, setIsHidden] = useState(true)
    const [tagText, setTagText] = useState('')

    const dispatch = useDispatch()

    const handleClick = () => setIsHidden((prev) => !prev)

    const onBlur = () => setIsHidden(true)

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setTagText('')
            setIsHidden(true)
        }

        if (event.key !== 'Enter') return

        const text = tagText.trim()

        if (!text) return

        dispatch(
            setTag({
                taskId,
                dayId: activeDayId,
                tag: {
                    id: generateRandomId(),
                    text,
                },
            }),
        )

        setTagText('')
        setIsHidden(true)
    }

    return (
        <>
            {!tag &&
                (isHidden ? (
                    <Button
                        className={styles.addTagButton}
                        onClick={handleClick}
                        theme={theme}
                        disabled={disabled}
                    >
                        <Icons.Add className={styles.icon} size={16} />
                    </Button>
                ) : (
                    <InputText
                        className={styles.input}
                        value={tagText}
                        onValueChange={setTagText}
                        onKeyDown={handleKeyDown}
                        onBlur={onBlur}
                        autoFocus
                    />
                ))}
        </>
    )
}
