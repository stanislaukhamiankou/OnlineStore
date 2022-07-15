import { Typography } from 'antd'
import { useEffect } from 'react'

import { ShoppingCartList } from 'src/components/_molecules'
import { SHOPPING_CART } from 'src/constants'
import { requestAdvanceOrderAddInfo } from 'src/redux/advanceOrder/action'
import { getAdvanceOrderInfo } from 'src/redux/advanceOrder/getters'
import { useDispatch, useSelector } from 'src/redux/hooks'
import './style.scss'

export const ShoppingCart = () => {
    const dispatch = useDispatch()
    const gadget = useSelector(getAdvanceOrderInfo)

    useEffect(() => {
        dispatch(requestAdvanceOrderAddInfo())
    }, [])

    return (
        <div className="shopping-cart">
            <div className="shopping-cart-content">
                <div className="shopping-cart-content-left">
                    <Typography className="title-shopping-cart">
                        {SHOPPING_CART.ITEM_TITLE}
                    </Typography>
                    <ShoppingCartList data={gadget}/>
                </div>
            </div>
        </div>
    )
}