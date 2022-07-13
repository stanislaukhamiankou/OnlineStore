import { useEffect } from 'react'

import { requestStatisticsInfo } from 'src/redux/statistics/actions'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getStatisticsInfo } from 'src/redux/statistics/getter'
import { StatisticsContent } from 'src/components/_organisms'

export const Statistics = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(getStatisticsInfo)

    useEffect(() => {
      dispatch(requestStatisticsInfo())
    }, [])
  
    return <StatisticsContent data={data}/>
}