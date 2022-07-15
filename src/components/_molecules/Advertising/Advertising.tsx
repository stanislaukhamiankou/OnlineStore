import { Carousel } from 'antd'
import { AdvertisingImage } from 'src/components/_atoms'
import { CAROUSEL_PROFILE, ITEM_CAROUSEL } from 'src/constants'
import { TypographyStack } from '../TypographyStack'
import './style.scss'

export const Advertising = () => (
    <Carousel className="avertising">
        <div className="item-avertising">
            <div className="item-avertising-left">
                <TypographyStack
                    className="avertising-content-left"
                    classNameTypographyFirst="text-item-phone"
                    classNameTypographySecond="text-description-phone"
                    text={{
                        item_text_first: ITEM_CAROUSEL.ITEM_PHONE_TITLE,
                        item_text_second: ITEM_CAROUSEL.ITEM_PHONE_DESCRIPTION,
                    }}
                />
            </div>
            <div className="item-avertising-right">
                <AdvertisingImage
                    className="avertising-content-right"
                    src={CAROUSEL_PROFILE.ITEM_LINKS_FIRST}
                />
            </div>
        </div>
        <div className="item-avertising">
            <div className="item-avertising-left">
                <TypographyStack
                    className="avertising-content-left"
                    classNameTypographyFirst="text-item-phone"
                    classNameTypographySecond="text-description-phone"
                    text={{
                        item_text_first: ITEM_CAROUSEL.ITEM_TABLET_TITLE,
                        item_text_second: ITEM_CAROUSEL.ITEM_TABLET_DESCRIPTION,
                    }}
                />
            </div>
            <div className="item-avertising-right">
                <AdvertisingImage
                    className="tiker-content-right"
                    src={CAROUSEL_PROFILE.ITEM_LINKS_SECOND}
                />
            </div>
        </div>
        <div className="item-tiker">
            <div className="item-avertising-left">
                <TypographyStack
                    className="avertising-content-left"
                    classNameTypographyFirst="text-item-phone"
                    classNameTypographySecond="text-description-phone"
                    text={{
                        item_text_first: ITEM_CAROUSEL.ITEM_LAPTOPS_TITLE,
                        item_text_second: ITEM_CAROUSEL.ITEM_LAPTOPS_DESCRIPTION,
                    }}
                />
            </div>
            <div className="item-tiker-right">
                <AdvertisingImage
                    className="tiker-content-right"
                    src={CAROUSEL_PROFILE.ITEM_LINKS_THIRD}
                />
            </div>
        </div>
    </Carousel>
)