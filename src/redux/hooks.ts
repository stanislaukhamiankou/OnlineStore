import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
