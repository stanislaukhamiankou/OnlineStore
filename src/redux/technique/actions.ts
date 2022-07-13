import { error, finish, loading, techniqueLoadSuccess } from './techniqueSlice'
import { requestTechniqueInfoAPI } from 'src/utils'
import { AppThunk } from '../store'

export const requestTechniqueInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestTechniqueInfoAPI()
        dispatch(techniqueLoadSuccess(response.data))
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}