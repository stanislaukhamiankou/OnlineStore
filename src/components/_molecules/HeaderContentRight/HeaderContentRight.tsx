import { ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'antd'

import { routes } from 'src/router/Config/config.routes'
import { Button } from 'src/components/_atoms'
import { useSelector } from 'src/redux/hooks'
import { getAdvanceOrderInfo } from 'src/redux/advanceOrder/getters'

export const HeaderContentRight = () => {
    const navigate = useNavigate()
    const gadget = useSelector(getAdvanceOrderInfo)

    return (
        <div className="menu-item-right">
            <div className="button-menu-item-right">
                <Button
                    className="button-menu-right"
                    icon={
                        <Badge count={gadget.length}>
                            <ShoppingCartOutlined />
                        </Badge>
                    }
                    onClick={() => navigate(routes.shoppingcart)}
                />
            </div>
        </div>
    )
}