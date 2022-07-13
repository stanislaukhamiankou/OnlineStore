import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITechnique, ITechniqueState } from './type'

const initialState: ITechniqueState = {
    technique: [],
    isLoading: false,
    isLoaded: false,
    error: null,
    filteredTechnique: [],
}

export const techniqueSlice = createSlice({
    name: 'technique',
    initialState,
    reducers: {
        loading(state: ITechniqueState) {
            state.isLoading = true
            state.error = null
        },
        finish(state: ITechniqueState) {
            state.isLoading = false
        },
        error(
            state: ITechniqueState,
            action: PayloadAction<{ error: ITechniqueState['error'] }>,) 
        {
            const { error } = action.payload
            state.error = error
        },
        techniqueLoadSuccess(state: ITechniqueState, action: PayloadAction<ITechnique[]>) {
            state.isLoading = false
            state.error = ''
            state.technique = action.payload
        },
        setTechnique(state: ITechniqueState, action: PayloadAction<{ data: ITechnique[] }>) {
            const { data } = action.payload
            state.isLoaded = true
            state.technique = data
        },
        setFilteredTechnique(state: ITechniqueState, action: PayloadAction<ITechnique[]>) {
            state.filteredTechnique = action.payload
        },
    },
})

export default techniqueSlice.reducer
export const { loading, finish, error, techniqueLoadSuccess, setTechnique, setFilteredTechnique } = techniqueSlice.actions
