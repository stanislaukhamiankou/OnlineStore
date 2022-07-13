import { Typography } from 'antd'
import cn from 'classnames'

import { TextAndChartType } from '.'

export const TextAndChart = ({
    classNameTypography,
    classNameChart,
    className,
    chart,
    text
}: TextAndChartType) => (
    <div className={cn('typography-stack-default', className)}>
        <Typography className={classNameTypography}>
            {text}
        </Typography>
        <div className={classNameChart}>
            {chart}
        </div>
    </div>
)