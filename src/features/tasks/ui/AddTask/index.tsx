import { type FC, type KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from '@entities/task'
import { generateRandomId } from '@shared/lib/generateRandomId.ts'
// import { Button } from '@shared/ui/Button'
// import { Icons } from '@shared/ui/Icons'
import { InputText } from '@shared/ui/InputText'

import styles from './index.module.scss'

type AddTaskProps = {
    activeDayId: number
}

const ENTER_EVENT_KEY = 'Enter'

export const AddTask: FC<AddTaskProps> = ({ activeDayId }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useDispatch()

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === ENTER_EVENT_KEY && inputValue.trim().length > 0) {
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
    }

    // const handleAddTask = () => {
    //     if (inputValue.trim().length > 0) {
    //         dispatch(
    //             addTask({
    //                 id: generateRandomId(),
    //                 dayId: activeDayId,
    //                 text: inputValue,
    //                 completed: false,
    //             }),
    //         )
    //
    //         setInputValue('')
    //     }
    // }

    return (
        <div className={styles.addTask}>
            <InputText
                placeholder={'Введите текст'}
                value={inputValue}
                onValueChange={setInputValue}
                onKeyDown={handleKeyDown}
            />
            {/*<Button className={styles.addButton} onClick={handleAddTask}>*/}
            {/*    <Icons.Add size={16} />*/}
            {/*</Button>*/}
        </div>
    )
}
