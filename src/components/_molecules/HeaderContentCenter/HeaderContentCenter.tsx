import { Menu } from 'antd'

import { items } from 'src/constants'

export const HeaderContentCenter = () => (
        <div className="menu-item-center">
            <Menu mode="horizontal" items={items} defaultSelectedKeys={['profile']}/>
        </div>
)
