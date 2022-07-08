import { Carousel, Image, Typography } from 'antd'
import { ITEM_CAROUSEL } from '../../../constants';

import './style.scss'

export const CarouselHeader = () => {
    
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }

    return (
        <Carousel afterChange={onChange} className="tiker">
            <div className="item-tiker">
                <div className="item-tiker-left">
                    <div className="tiker-content-left">
                        <Typography className="text-item-phone">
                            {ITEM_CAROUSEL.ITEM_PHONE_TITLE}
                        </Typography>
                        <Typography className="text-description-phone">
                            {ITEM_CAROUSEL.ITEM_PHONE_DESCRIPTION}
                        </Typography>
                    </div>
                </div>
                <div className="item-tiker-right">
                    <div className="tiker-content-right">
                        <Image
                            width={500}
                            height={400}
                            src="https://www.nautimarket-europe.com/open2b/var/products/148/74/0-b5a6552a-2000.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className="item-tiker">
                <div className="item-tiker-left">
                    <div className="tiker-content-left">
                        <Typography className="text-item-phone">
                            {ITEM_CAROUSEL.ITEM_TABLET_TITLE}
                        </Typography>
                        <Typography className="text-description-phone">
                            {ITEM_CAROUSEL.ITEM_TABLET_DESCRIPTION}
                        </Typography>
                    </div>
                </div>
                <div className="item-tiker-right">
                    <div className="tiker-content-right">
                        <Image
                            width={500}
                            height={400}
                            src="https://5zv.by/image/cache/catalog/YML196c40e29404dfff38c1cc7280b9877b/planshety/IMG66900f031b670de2581417e964eda43f-1000x1000.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className="item-tiker">
                <div className="item-tiker-left">
                    <div className="tiker-content-left">
                        <Typography className="text-item-phone">
                            The new Laptops are here take a look
                        </Typography>
                        <Typography className="text-description-phone">
                            Available Models iPhone Xs, iPhone Xr, iPhone 11, iPhone 12 Pro, iPhone SE, iPhone 13 Pro Max, iPhone 13 Pro, 
                            iPhone 13 mini. 
                        </Typography>
                    </div>
                </div>
                <div className="item-tiker-right">
                    <div className="tiker-content-right">
                        <Image
                            width={500}
                            height={400}
                            src="https://wmlab.by/wp-content/uploads/2020/04/macbook_pro_16-in_pure_front_space_gray_print.png"
                        />
                    </div>
                </div>
            </div>
        </Carousel>
    )
}