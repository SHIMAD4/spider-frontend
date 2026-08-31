import styles from './index.module.scss'
import { InputText } from '../../../shared/ui/InputText'
import { Button } from '../../../shared/ui/Button'
import { addTask } from '../../../entities/task/model/taskSlice.ts'
import { useAppDispatch } from '../../../app/store/hooks.ts'
import { useState } from 'react'
import { generateRandomId } from '../../../shared/utils/generateRandomId.ts'

export const AddTask = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleAddTask = () => {
        dispatch(
            addTask({
                id: generateRandomId(),
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
            <Button onClick={handleAddTask}>Добавить задачу</Button>
        </div>
    )
}
