import { useDispatch as useAppDispatch} from 'react-redux'
import { useSelector as useAppSelector} from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'

import { AppDispatch, RootState } from '../redux'

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
export const useDispatch = () => useAppDispatch<AppDispatch>()
