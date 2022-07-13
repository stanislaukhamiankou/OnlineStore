import { HTTP_METHODS } from 'src/helper/api'
import { IAdvanceOrder } from 'src/redux/advanceOrder/type'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const requestAdvanceOrderInfoAPI = () => 
    fetcher.requestToReceive<IAdvanceOrder, IAdvanceOrder[]>({
        url: 'http://localhost:3000/advanceOrder',
        method: HTTP_METHODS.GET,
})

export const requestAdvanceOrderAddAPI = (data: IAdvanceOrder) => 
    fetcher.requestToReceive<IAdvanceOrder, IAdvanceOrder[]>({
        url: 'http://localhost:3000/advanceOrder',
        method: HTTP_METHODS.POST,
        data,
})

export const requestAdvanceOrderDeleteAPI = (id: number) =>
    fetcher.requestToReceive<IAdvanceOrder, IAdvanceOrder[]>({
        url: `http://localhost:3000/advanceOrder/${id}`,
        method: HTTP_METHODS.DELETE,
    })