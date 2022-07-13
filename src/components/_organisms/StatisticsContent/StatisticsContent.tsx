import { Line } from '@ant-design/plots'

import { PercentageChart, ProductСhart } from 'src/components/_atoms'
import { TextAndChart } from 'src/components/_molecules'
import { STATISTICS } from 'src/constants'
import { StatisticsContentType } from '.'
import './style.scss'

export const StatisticsContent = ({data}: StatisticsContentType) => {
    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        smooth: true,
        animation: {
          appear: {
            animation: 'path-in',
            duration: 5000,
          },
        },
    }
    
    return (
        <div className="statistics">
            <TextAndChart 
                classNameChart="line-statistics"
                text={STATISTICS.ITEM_FIRST}
                chart={<Line {...config} />}
            />
            <div className="statistics-content">
                <TextAndChart
                className="statistics-content-left"
                text={STATISTICS.ITEM_SECOND}
                chart={<ProductСhart />}
                />
                <div className="statistics-content-right">
                    <TextAndChart
                        className="statistics-content-right-item"
                        classNameTypography="text-stistics-diagram"
                        text={STATISTICS.ITEM_THIRD}
                        chart={<PercentageChart />}
                    />
                    <TextAndChart
                        className="statistics-content-right-item"
                        classNameTypography="text-stistics-diagram"
                        text={STATISTICS.ITEM_FOURTH}
                        chart={<PercentageChart />}
                    />
                </div>
            </div>
        </div>
    )
}