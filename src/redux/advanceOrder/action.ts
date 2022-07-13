import { requestAdvanceOrderAddAPI, requestAdvanceOrderDeleteAPI, requestAdvanceOrderInfoAPI } from 'src/utils'
import { AppThunk } from '../store'
import { loading, error, finish, setAdvanceOrder, advanceOrderLoadSuccess } from './advanceOrderSlice'
import { IAdvanceOrder } from './type'

export type RequestAdvanceOrderAddActionProps = {
    advanceOrder: IAdvanceOrder
}

export const requestAdvanceOrderAddInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestAdvanceOrderInfoAPI()
        dispatch(advanceOrderLoadSuccess(response.data))
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
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }