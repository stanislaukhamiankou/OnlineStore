import { Typography } from 'antd'
import { CATEGORIES_ITEM, ITEM_CAROUSEL, PRODUCTS_ITEM } from '../../../constants'
import { CarouselHeader } from '../../_molecules'
import { Categories } from '../Categories'
import { Products } from '../Products'
import './style.scss'

export const Profile = () => {
    return (
        <div className="profile">
            <CarouselHeader/>
            <div className="categories">
                <Typography>
                    {CATEGORIES_ITEM.ITEM_TITLE}
                </Typography>
                <Typography className="categories-title-subtext">
                    {ITEM_CAROUSEL.ITEM_TABLET_DESCRIPTION}
                </Typography>
                <Categories />
            </div>
            <div className="products">
                <Typography>
                    {PRODUCTS_ITEM.ITEM_TITLE}
                </Typography>
                <Typography className="categories-title-subtext">
                    {ITEM_CAROUSEL.ITEM_TABLET_DESCRIPTION}
                </Typography>
                <Products/>
            </div>
        </div>
    )
}