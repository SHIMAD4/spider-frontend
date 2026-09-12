import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux'

import type { AppDispatchType, RootStateType } from './store.ts'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
