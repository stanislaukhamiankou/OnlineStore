import { useEffect } from 'react'

import { requestStatisticsInfo } from 'src/redux/statistics/actions'
import { useDispatch, useSelector } from 'src/redux/hooks'
import { getStatisticsInfo } from 'src/redux/statistics/getter'
import { StatisticsContent } from 'src/components/_organisms'

export const Statistics = () => {
    const dispatch = useDispatch()
    const data = useSelector(getStatisticsInfo)

    useEffect(() => {
      dispatch(requestStatisticsInfo())
    }, [])
  
    // return <StatisticsContent data={data}/>
    return <div>
      f
    </div>
}