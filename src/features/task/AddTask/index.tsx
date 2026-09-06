import styles from './index.module.scss'
import { InputText } from '../../../shared/ui/InputText'
import { Button } from '../../../shared/ui/Button'
import { addTask } from '../../../entities/task/model/taskSlice.ts'
import { useAppDispatch } from '../../../app/store/hooks.ts'
import { type FC, useState } from 'react'
import { generateRandomId } from '../../../shared/utils/generateRandomId.ts'
import { Icons } from '../../../shared/ui/Icons'

type AddTaskProps = {
    activeDayId: number
}

export const AddTask: FC<AddTaskProps> = ({ activeDayId }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const dispatch = useAppDispatch()

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
            <Button onClick={handleAddTask}>
                <Icons.Add size={16} />
            </Button>
        </div>
    )
}
