import { Typography } from 'antd'
import cn from 'classnames'

import { TypographyStackType } from '.'

export const TypographyStack = ({
    className,
    classNameTypographyFirst,
    classNameTypographySecond,
    text
}: TypographyStackType) => (
    <div className={cn('typography-stack-default', className)}>
        <Typography className={classNameTypographyFirst}>
            {text.item_text_first}
        </Typography>
        <Typography className={classNameTypographySecond}>
            {text.item_text_second}
        </Typography>
    </div>
)