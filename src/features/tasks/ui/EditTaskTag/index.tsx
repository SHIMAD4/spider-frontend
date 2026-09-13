import { type FC, type KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setTag, Tag, type TaskTag } from '@entities/task'
import { InputText } from '@shared/ui/InputText'

import styles from './index.module.scss'

type EditTaskTagProps = {
    taskId: number
    dayId: number
    tag: TaskTag
    completed: boolean
    theme?: string
    disabled: boolean
}

export const EditTaskTag: FC<EditTaskTagProps> = ({
    taskId,
    dayId,
    completed,
    tag,
    theme,
    disabled,
}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [draft, setDraft] = useState('')

    const dispatch = useDispatch()

    const handleEditStart = () => {
        setDraft(tag.text)
        setIsEditing(true)
    }

    const handleCancel = () => {
        setDraft('')
        setIsEditing(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleCancel()
            return
        }

        if (event.key !== 'Enter') return

        const text = draft.trim()

        if (!text) {
            dispatch(
                setTag({
                    taskId,
                    dayId,
                    tag: null,
                }),
            )

            setIsEditing(false)
            return
        }

        dispatch(
            setTag({
                taskId,
                dayId,
                tag: {
                    id: tag.id,
                    text,
                },
            }),
        )

        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <InputText
                className={styles.input}
                value={draft}
                onValueChange={setDraft}
                onKeyDown={handleKeyDown}
                onBlur={handleCancel}
                autoFocus
            />
        )
    }

    return (
        <Tag
            id={tag.id}
            text={tag.text}
            onClick={handleEditStart}
            theme={theme}
            disabled={disabled}
            completed={completed}
        />
    )
}
