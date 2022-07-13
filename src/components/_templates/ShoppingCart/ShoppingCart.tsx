import { Typography, Image } from 'antd'
import { useEffect } from 'react'

import { ShoppingCartList } from 'src/components/_molecules'
import { requestAdvanceOrderAddInfo } from 'src/redux/advanceOrder/action'
import { getAdvanceOrderInfo } from 'src/redux/advanceOrder/getters'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import './style.scss'

export const ShoppingCart = () => {
    const dispatch = useAppDispatch()
    const gadget = useAppSelector(getAdvanceOrderInfo)

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
                <div className="shopping-cart-content-right">
                    <div className="order-info-shopping-cart">
                        <Typography className="title-right">
                            Order price
                        </Typography>
                        <Typography>
                            Number of goods
                        </Typography>
                        <Typography>
                            Discount
                        </Typography>
                        <Typography>
                            Delivery
                        </Typography>
                    </div>
                    <div className="payment">
                        <Typography className="title-right">
                            We accept payment
                        </Typography>
                        <div>
                            <Image
                                width={70}
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1599px-Visa_Inc._logo.svg.png'
                            />
                            <Image
                                width={70}
                                src='https://www.logolynx.com/images/logolynx/39/39bda1d33df635af2af2560fa7efb8bf.png'
                            />
                        </div>
                        <Typography>
                            You can also pay in cash at the pickup point.
                        </Typography>
                        <Typography className="title-right">
                            Delivery
                        </Typography>
                        <Typography>
                            Within 2-3 days. Free on orders over $250
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}