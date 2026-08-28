import type { AppDispatchType, RootStateType } from './store.ts'
import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
