import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStatistics, IStatisticsState } from './type'

const initialState: IStatisticsState = {
    statistics: [],
    isLoading: false,
    isLoaded: false,
    error: null,
}

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        loading(state: IStatisticsState) {
            state.isLoading = true
            state.error = null
        },
        finish(state: IStatisticsState) {
            state.isLoading = false
        },
        error(
            state: IStatisticsState,
            action: PayloadAction<{ error: IStatisticsState['error'] }>,) 
        {
            const { error } = action.payload
            state.error = error
        },
        statisticsLoadSuccess(state: IStatisticsState, action: PayloadAction<IStatistics[]>) {
            state.isLoading = false
            state.error = ''
            state.statistics = action.payload
        },
    },
})

export default statisticsSlice.reducer
export const { loading, finish, error, statisticsLoadSuccess } = statisticsSlice.actions
