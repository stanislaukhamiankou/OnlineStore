import { Avatar as IMG } from 'antd'

import { AvatarType } from '.'

export const Avatar = ({ className, src}: AvatarType) => 
    <IMG
        className={className}
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src={src}
    />