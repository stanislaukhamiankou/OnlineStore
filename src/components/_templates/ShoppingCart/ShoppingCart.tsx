import { Typography, Image, Button } from 'antd'
import { useEffect } from 'react'

import { ShoppingCartList } from 'src/components/_molecules'
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

    console.log(gadget)

    return (
        <div className="shopping-cart">
            <div className="shopping-cart-content">
                <div className="shopping-cart-content-left">
                    <Typography className="title-shopping-cart">
                        Shopping cart
                    </Typography>
                    <ShoppingCartList data={gadget}/>
                </div>
            </div>
        </div>
    )
}