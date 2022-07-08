import { Image, Typography } from 'antd'

import './style.scss'

export const Categories = () => {
    return (
        <div className="categories-content">
            <div className="categories-content-left">
                <div className="phone-item-categories">
                    <Image
                        width={500}
                        src="https://app-minsk.by/files/images/mac_1.png"
                    />
                    <Typography className="header-item-categories-content">
                        Laptops
                    </Typography>
                    <Typography className="header-item-description">
                        The Laptop Solution
                    </Typography>
                </div>
                <div className="watch-item-categories">
                    <Image
                        width={300}
                        src="https://passkit.com/blog/wp-content/uploads/2016/05/placeit-2.png"
                    />
                    <div className="watch-block-text">
                        <Typography className="header-item-categories-content">
                            Watch
                        </Typography>
                        <Typography className="header-item-description">
                            Not just stylish
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="categories-content-center">
                <Image
                    width={290}
                    height={600}
                    src="https://iphoriya.ru/wp-content/uploads/iphone-13-pro-blue.jpg"
                />
                <Typography className="header-item-categories-content">
                    Phones
                </Typography>
                <Typography className="header-item-description">
                    Your day to day life
                </Typography>
            </div>
            <div className="categories-content-right">
                <Image
                    src="https://mobilmir71.ru/image/cache/catalog/911-1000x1000.png"
                />
                <Typography className="header-item-categories-content">
                    Tablet
                </Typography>
                <Typography className="header-item-description">
                    Empower your work
                </Typography>
            </div>
        </div>
    )
}