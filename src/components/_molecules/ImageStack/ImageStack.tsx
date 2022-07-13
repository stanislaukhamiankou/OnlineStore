import { Image } from 'antd'
import cn from 'classnames'

import { ImageStackType } from '.'
import './style.scss'

export const ImageStack = ({ className }: ImageStackType) => (
    <div className={cn('button-default', className)}>
        <div className="image-stack">
            <div className="image-stack__item image-stack__item--top">
                <Image
                    className="img-about"
                    src="https://i.pinimg.com/originals/ca/b0/fc/cab0fcb462447c0e0b52773ead503ebc.jpg"
                    />
            </div>
            <div className="image-stack__item image-stack__item--bottom">
                <Image
                    className="img-about" 
                    src="https://i.pinimg.com/474x/f5/2d/5e/f52d5e8fff59c5363417172dcab46c58.jpg"
                    />
            </div>
        </div>
    </div>
)