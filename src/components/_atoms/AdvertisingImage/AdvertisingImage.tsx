import { Image } from 'antd'
import cn from 'classnames'

import { AdvertisingImageType } from '.'

export const AdvertisingImage = ({className, src}: AdvertisingImageType) => (
    <div className={cn('advertising-image-default', className)}>
        <Image
            width={500}
            height={400}
            src={src}
        />
    </div>
)