import { error, finish, loading, statisticsLoadSuccess } from './statisticsSlice'
import { requestStatisticsInfoAPI } from 'src/utils'
import { AppThunk } from '../store'

export const requestStatisticsInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestStatisticsInfoAPI()
        dispatch(statisticsLoadSuccess(response.data))
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}