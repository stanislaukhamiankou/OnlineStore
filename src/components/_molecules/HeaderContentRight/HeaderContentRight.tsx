import { ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'antd'

import { routes } from 'src/router/Config/config.routes'
import { Button } from 'src/components/_atoms'

export const HeaderContentRight = () => {
    const navigate = useNavigate()
    const count = window.localStorage.getItem('count')

    return (
        <div className="menu-item-right">
            <div className="button-menu-item-right">
                <Button
                    className="button-menu-right"
                    icon={
                        <Badge count={Number(count)}>
                            <ShoppingCartOutlined />
                        </Badge>
                    }
                    onClick={() => navigate(routes.shoppingcart)}
                />
            </div>
        </div>
    )
}