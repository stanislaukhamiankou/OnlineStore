import { Card, List } from 'antd'

import { requestdeleteAdvanceOrder } from 'src/redux/advanceOrder/action'
import { CardContent } from '../CardContent/CardContent'
import { useDispatch } from 'src/redux/hooks'
import { ShoppingCartListType } from '.'

export const ShoppingCartList = ({data}: ShoppingCartListType) => {
    const dispatch = useDispatch()

    const deleteItemCart = (id: number) => {
        dispatch(requestdeleteAdvanceOrder(id))
    }

    return (
        <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={item.make.toUpperCase() + ' ' + item.name}>
                    <CardContent
                        src={item.img}
                        text={
                            item.oc + ', ' + item.screen_diagonal + ', ' + item.storage + ', ' + item.year
                        }
                        deleteItemCart={(e) => deleteItemCart(item.id)}
                    />
                </Card>
            </List.Item>
            )}
        />
    )
}