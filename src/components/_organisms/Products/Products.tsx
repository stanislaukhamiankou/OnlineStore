import { Image } from 'antd'

import { ITEM_CAROUSEL, LINKS_PRODUCTS, PRODUCTS_ITEM } from 'src/constants'
import { TypographyStack } from 'src/components/_molecules'
import './style.scss'

export const Products = () => {
    return (
        <div className="products">
            <TypographyStack 
                classNameTypographySecond="categories-title-subtext"
                text={{
                    item_text_first: PRODUCTS_ITEM.ITEM_TITLE,
                    item_text_second: ITEM_CAROUSEL.ITEM_TABLET_DESCRIPTION,
                }}
            />
            <div className="products-content">
                <div className="item-products-content">
                    <Image
                        height={200}
                        src={LINKS_PRODUCTS.ITEM_LINKS_FIRST}
                    />
                    <TypographyStack
                        classNameTypographySecond="description-products"
                        text={{
                            item_text_first: PRODUCTS_ITEM.ITEM_LAPTOPS,
                            item_text_second: PRODUCTS_ITEM.ITEM_DESCRIPTION,
                        }}
                    />
                </div>
                <div className="item-products-content">
                    <Image
                        height={200}
                        src={LINKS_PRODUCTS.ITEM_LINKS_SECOND}
                    />
                    <TypographyStack
                        classNameTypographySecond="description-products"
                        text={{
                            item_text_first: PRODUCTS_ITEM.ITEM_WATCH,
                            item_text_second: PRODUCTS_ITEM.ITEM_DESCRIPTION,
                        }}
                    />
                </div>
                <div className="item-products-content">
                    <Image
                        height={200}
                        src={LINKS_PRODUCTS.ITEM_LINKS_THIRD}
                    />
                    <TypographyStack
                        classNameTypographySecond="description-products"
                        text={{
                            item_text_first: PRODUCTS_ITEM.ITEM_TABLET,
                            item_text_second: PRODUCTS_ITEM.ITEM_DESCRIPTION,
                        }}
                    />
                </div>
                <div className="item-products-content">
                    <Image
                        height={200}
                        src={LINKS_PRODUCTS.ITEM_LINKS_FOURTH}
                    />
                    <TypographyStack
                        classNameTypographySecond="description-products"
                        text={{
                            item_text_first: PRODUCTS_ITEM.ITEM_PHONE,
                            item_text_second: PRODUCTS_ITEM.ITEM_DESCRIPTION,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}