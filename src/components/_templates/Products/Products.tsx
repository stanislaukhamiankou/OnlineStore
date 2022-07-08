import { Image, Typography } from 'antd'
import { PRODUCTS_ITEM } from '../../../constants'

import './style.scss'

export const Products = () => {
    return (
        <div className="products-content">
            <div className="item-products-content">
                <Image
                    src="https://app-minsk.by/files/images/mac_1.png"
                />
                <Typography>
                    MacBook
                </Typography>
                <Typography className="description-products">
                    {PRODUCTS_ITEM.ITEM_DESCRIPTION}
                </Typography>
            </div>
            <div className="item-products-content">
                <Image
                    src="https://app-minsk.by/files/images/mac_1.png"
                />
                <Typography>
                    Apple Watch 7
                </Typography>
                <Typography className="description-products">
                    {PRODUCTS_ITEM.ITEM_DESCRIPTION}
                </Typography>
            </div>
            <div className="item-products-content">
                <Image
                    src="https://app-minsk.by/files/images/mac_1.png"
                />
                <Typography>
                    IPad
                </Typography>
                <Typography className="description-products">
                    {PRODUCTS_ITEM.ITEM_DESCRIPTION}
                </Typography>
            </div>
            <div className="item-products-content">
                <Image
                    src="https://app-minsk.by/files/images/mac_1.png"
                />
                <Typography>
                    IPhone 13
                </Typography>
                <Typography className="description-products">
                    {PRODUCTS_ITEM.ITEM_DESCRIPTION}
                </Typography>
            </div>
        </div>
    )
}