import { IStatistics } from 'src/redux/statistics/type'
import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const requestStatisticsInfoAPI = () => 
    fetcher.requestToReceive<IStatistics, IStatistics[]>({
        url: 'http://localhost:3000/statistics',
        method: HTTP_METHODS.GET,
})
