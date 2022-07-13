import { Image } from 'antd'

import { CATEGORIES_ITEM, ITEM_CAROUSEL, LINKS_CATEGORIES } from 'src/constants'
import { TypographyStack } from 'src/components/_molecules'
import './style.scss'

export const Categories = () => {
    return (
        <div className="categories">
            <TypographyStack
                classNameTypographySecond="categories-title-subtext"
                text={{
                    item_text_first: CATEGORIES_ITEM.ITEM_TITLE,
                    item_text_second: ITEM_CAROUSEL.ITEM_TABLET_DESCRIPTION
                }}
            />
            <div className="categories-content">
                <div className="categories-content-left">
                    <div className="phone-item-categories">
                        <Image
                            width={500}
                            src={LINKS_CATEGORIES.ITEM_LINKS_FIRST}
                        />
                        <TypographyStack 
                            classNameTypographyFirst="header-item-categories-content"
                            text={{
                                item_text_first: CATEGORIES_ITEM.ITEM_LAPTOPS,
                                item_text_second: CATEGORIES_ITEM.ITEM_LAPTOPS_DESCRIPTION
                            }}
                        />
                    </div>
                    <div className="watch-item-categories">
                        <Image
                            width={300}
                            src={LINKS_CATEGORIES.ITEM_LINKS_SECOND}
                        />
                        <TypographyStack
                            className="watch-block-text"
                            classNameTypographyFirst="header-item-categories-content"
                            text={{
                                item_text_first: CATEGORIES_ITEM.ITEM_WATCH,
                                item_text_second: CATEGORIES_ITEM.ITEM_WATCH_DESCRIPTION
                            }}
                        />
                    </div>
                </div>
                <div className="categories-content-center">
                    <Image
                        width={350}
                        height={600}
                        src={LINKS_CATEGORIES.ITEM_LINKS_THIRD}
                    />
                    <TypographyStack
                        classNameTypographyFirst='header-item-categories-content'
                        text={{
                            item_text_first: CATEGORIES_ITEM.ITEM_PHONES,
                            item_text_second: CATEGORIES_ITEM.ITEM_PHONES_DESCRIPTION
                        }}
                    />
                </div>
                <div className="categories-content-right">
                    <Image
                        width={550}
                        height={600}
                        src={LINKS_CATEGORIES.ITEM_LINKS_FOURTH}
                    />
                    <TypographyStack
                        classNameTypographyFirst='header-item-categories-content'
                        text={{
                            item_text_first: CATEGORIES_ITEM.ITEM_TABLET,
                            item_text_second: CATEGORIES_ITEM.ITEM_TABLET_DESCRIPTION
                        }}
                    />
                </div>
            </div>
        </div>
    )
}