import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import advanceOrderSlice from './advanceOrder/advanceOrderSlice'
import statisticsSlice from './statistics/statisticsSlice'
import techniqueSlice from './technique/techniqueSlice'

export const store = configureStore({
    reducer: {
        technique: techniqueSlice,
        statistics: statisticsSlice,
        advanceOrder: advanceOrderSlice,
    },
})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
