import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICountState } from './type'

const initialState: ICountState = {
    count: 0
}

export const countSlice = createSlice({
    name: 'technique',
    initialState,
    reducers: {
        setCount(state: ICountState, action: PayloadAction<number>) {
            state.count = action.payload
        },
    },
})

export default countSlice.reducer
export const { setCount } = countSlice.actions
