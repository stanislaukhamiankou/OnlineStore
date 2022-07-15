import { Image } from 'antd'

import { TypographyStack } from 'src/components/_molecules'
import { ABOUT_CONTENT_OUR_WORK } from 'src/constants'

export const AboutContentOurWork = () => (
    <div className="our-work">
        <div className="our-work-info">
            <TypographyStack
                className="description-work-info"
                classNameTypographyFirst="title-our-work"
                classNameTypographySecond="desription-info"
                text={{
                    item_text_first: ABOUT_CONTENT_OUR_WORK.ITEM_TITLE,
                    item_text_second: ABOUT_CONTENT_OUR_WORK.ITEM_DESCRIPTION,
                }}
            />
        </div>
        <div className="img-our-info">
            <Image
                className="img"
                src="https://miro.medium.com/max/1400/1*D4kTIjhVkhHlYO-yJBnZTw.png"
            />
        </div>
    </div>
)