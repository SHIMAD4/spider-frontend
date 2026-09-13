import clsx from 'clsx'
import type { FC } from 'react'

import { Button } from '@shared/ui/Button'

import type { TaskTag } from '../../../task'

import styles from './index.module.scss'

type TagProps = {
    onClick?: () => void
    theme?: string
    disabled: boolean
    completed: boolean
} & TaskTag

export const Tag: FC<TagProps> = ({
    id,
    text,
    onClick,
    theme,
    disabled,
    completed,
}) => {
    return (
        <Button
            key={id}
            className={clsx(styles.tag, completed && styles.completed)}
            onClick={onClick}
            theme={theme}
            disabled={disabled}
        >
            {text}
        </Button>
    )
}
