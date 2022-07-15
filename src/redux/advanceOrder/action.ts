import { requestAdvanceOrderAddAPI, requestAdvanceOrderDeleteAPI, requestAdvanceOrderInfoAPI } from 'src/utils'
import { AppThunk } from '../store'
import { loading, error, finish, advanceOrderLoadSuccess } from './advanceOrderSlice'
import { IAdvanceOrder } from './type'

export type RequestAdvanceOrderAddActionProps = {
    advanceOrder: IAdvanceOrder
}

export const requestAdvanceOrderAddInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestAdvanceOrderInfoAPI()
        dispatch(advanceOrderLoadSuccess(response.data))
        localStorage.setItem('count', response.data.length.toString())
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}

export const requestAdvanceOrderAdd =
  ({advanceOrder}: RequestAdvanceOrderAddActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestAdvanceOrderAddAPI(advanceOrder)
      localStorage.setItem('count', data.length.toString())
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
}

export const requestdeleteAdvanceOrder =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const result = await requestAdvanceOrderDeleteAPI(id)
      if (result) {
        dispatch(requestAdvanceOrderAddInfo())
        const count = localStorage.getItem('count')
        localStorage.setItem('count', (Number(count) - 1).toString())
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }