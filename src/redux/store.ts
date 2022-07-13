import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import statisticsSlice from './statistics/statisticsSlice'
import techniqueSlice from './technique/techniqueSlice'
import countSlice from './count/countSlice'
import advanceOrderSlice from './advanceOrder/advanceOrderSlice'

export const store = configureStore({
    reducer: {
        technique: techniqueSlice,
        statistics: statisticsSlice,
        count: countSlice,
        advanceOrder: advanceOrderSlice,
    },
})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
