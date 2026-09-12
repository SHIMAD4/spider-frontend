import { type FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '@entities/task'

import { generateRandomId } from '@shared/lib/generateRandomId.ts'
import { Button } from '@shared/ui/Button'
import { Icons } from '@shared/ui/Icons'
import { InputText } from '@shared/ui/InputText'

import styles from './index.module.scss'

type AddTaskProps = {
    activeDayId: number
}

export const AddTask: FC<AddTaskProps> = ({ activeDayId }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useDispatch()

    const handleAddTask = () => {
        dispatch(
            addTask({
                id: generateRandomId(),
                dayId: activeDayId,
                text: inputValue,
                completed: false,
            }),
        )

        setInputValue('')
    }

    return (
        <div className={styles.addTask}>
            <InputText
                placeholder={'Введите текст'}
                value={inputValue}
                onValueChange={setInputValue}
            />
            <Button className={styles.addButton} onClick={handleAddTask}>
                <Icons.Add size={16} />
            </Button>
        </div>
    )
}
