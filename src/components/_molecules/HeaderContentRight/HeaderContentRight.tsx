import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

import { routes } from 'src/router/Config/config.routes'
import { getCount } from 'src/redux/count/getter'
import { useAppSelector } from 'src/redux/hooks'
import { Button } from 'src/components/_atoms'
import useRouter from 'src/hooks/useRouter'

export const HeaderContentRight = () => {
    const { push } = useRouter()
    const count = useAppSelector(getCount)

    return (
        <div className="menu-item-right">
            <div className="button-menu-item-right">
                <Button
                    className="button-menu-right"
                    icon={
                    <>
                        <Badge count={count}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </>
                    }
                    onClick={() => push(routes.shoppingcart)}
                />
            </div>
        </div>
    )
}