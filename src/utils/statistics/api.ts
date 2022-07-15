import { IStatistics } from 'src/redux/statistics/type'
import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const requestStatisticsInfoAPI = () => 
    fetcher.requestToReceive<IStatistics, IStatistics[]>({
        url: '/statistics',
        method: HTTP_METHODS.GET,
})
