import { Carousel, Image} from 'antd'

import './style.scss'

export const CarouselShoppingCart = () => {
    
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }

    return (
        <Carousel afterChange={onChange} className="carousel-shopping-cart">
            <div className="item-carousel-shopping-cart">
                <div className="item-carousel-shopping-cart-left">
                    <Image 
                        width={200}
                        height={200}
                        src="https://www.nautimarket-europe.com/open2b/var/products/148/74/0-b5a6552a-2000.jpg"
                    />
                </div>
            </div>
        </Carousel>
    )
}