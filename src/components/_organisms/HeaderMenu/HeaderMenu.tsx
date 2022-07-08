import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

import { routes } from '../../../router/Config/config.routes'
import { HEADER_MENU } from '../../../constants'
import useRouter from '../../../hooks/useRouter'
import { ButtonDefault } from '../../_atoms'
import './style.scss'

export const HeaderMenu = () => {
    const { push } = useRouter()

    return (
        <div className="menu-header">
            <div className="menu-item-left">
                <div className="logo">
                    {HEADER_MENU.ITEM_LOGO}
                </div>
            </div>
            <div className="menu-item-center">
                <Menu mode="horizontal">
                    <Menu.Item
                        key="profile"
                        onClick={() => push(routes.default)}
                    >
                        {HEADER_MENU.ITEM_PROFILE}
                    </Menu.Item>
                    <Menu.Item
                        key="all-products"
                        onClick={() => push(routes.allproducts)}
                    >
                        {HEADER_MENU.ITEM_ALL}
                    </Menu.Item>
                    <Menu.Item
                        key="about"
                        onClick={() => push(routes.about)}
                    >
                        {HEADER_MENU.ITEM_ABOUT}
                    </Menu.Item>
                    <Menu.Item
                        key="statistics"
                        onClick={(e) => push(routes.statistics)}
                    >
                        {HEADER_MENU.ITEM_STATISTICS}
                    </Menu.Item>
                </Menu>
            </div>
            <div className="menu-item-right">
                <div className="button-menu-item-right">
                    <ButtonDefault
                        className="button-menu-right"
                        icon={<SearchOutlined />}
                    />
                    <ButtonDefault
                        className="button-menu-right"
                        icon={<ShoppingCartOutlined />}
                        onClick={() => push(routes.shoppingcart)}
                    />
                </div>
            </div>
        </div>
    )
}