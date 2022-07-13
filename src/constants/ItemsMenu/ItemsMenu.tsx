import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom'

import { routes } from 'src/router/Config/config.routes'
import { HEADER_MENU } from '../Text'

export const items: MenuProps['items'] = [
    {
        label: (
            <Link to={routes.default}>
                {HEADER_MENU.ITEM_PROFILE}
            </Link>
        ),
        key: 'profile',
    },
    {
        label: (
            <Link to={routes.catalog}>
                {HEADER_MENU.ITEM_ALL}
            </Link>
        ),
        key: 'catalog',
    },
    {
        label: (
            <Link to={routes.about}>
                {HEADER_MENU.ITEM_ABOUT}
            </Link>
        ),
        key: 'about',
    },
    {
        label: (
            <Link to={routes.statistics}>
                {HEADER_MENU.ITEM_STATISTICS}
            </Link>
        ),
        key: 'statistics',
    },
]