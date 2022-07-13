import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAdvanceOrder, IAdvanceOrderState } from './type'

const initialState: IAdvanceOrderState = {
    advanceOrder: [],
    isLoading: false,
    isLoaded: false,
    error: null,
}

export const advanceOrderSlice = createSlice({
    name: 'advanceOrder',
    initialState,
    reducers: {
        loading(state: IAdvanceOrderState) {
            state.isLoading = true
            state.error = null
        },
        finish(state: IAdvanceOrderState) {
            state.isLoading = false
        },
        error(
            state: IAdvanceOrderState,
            action: PayloadAction<{ error: IAdvanceOrderState['error'] }>,) 
        {
            const { error } = action.payload
            state.error = error
        },
        setAdvanceOrder(state: IAdvanceOrderState, action: PayloadAction<{ data: IAdvanceOrder[] }>) {
            const { data } = action.payload
            state.isLoaded = true
            state.advanceOrder = data
        },
        advanceOrderLoadSuccess(state: IAdvanceOrderState, action: PayloadAction<IAdvanceOrder[]>) {
            state.isLoading = false
            state.error = ''
            state.advanceOrder = action.payload
        },
    },
})

export default advanceOrderSlice.reducer
export const { loading, finish, error, setAdvanceOrder, advanceOrderLoadSuccess } = advanceOrderSlice.actions
