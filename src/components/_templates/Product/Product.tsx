import { Image, Typography, Rate, Tooltip } from 'antd'
import { ButtonDefault } from '../../_atoms'

import './style.scss'

export const Product = () => {
    return (
        <div className="product">
            <div className="info-product">
                <div className="info-product-left">
                    <Image 
                        src="https://www.nautimarket-europe.com/open2b/var/products/148/74/0-b5a6552a-2000.jpg"
                    />
                </div>
                <div className="info-product-right">
                    <Rate allowHalf defaultValue={2.5} />
                    <Typography className='info-item-product'>
                        Apple iOS, экран 6.7" OLED (1284x2778), Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 4352 мАч, 1 SIM, влагозащита IP68
                    </Typography>
                </div>
            </div>
        </div>
    )
}