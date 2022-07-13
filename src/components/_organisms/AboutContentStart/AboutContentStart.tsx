import { ImageStack, TypographyStack } from 'src/components/_molecules'
import { ABOUT_CONTENT_START } from 'src/constants'
import './style.scss'

export const AboutContentStart = () => (
    <div className="about-content-start">
        <ImageStack className="about-content-start-left" />
        <TypographyStack 
            className="about-content-start-right"
            classNameTypographyFirst="content-title-about"
            classNameTypographySecond="content-description-about"
            text={{
                item_text_first: ABOUT_CONTENT_START.ITEM_TITLE,
                item_text_second: ABOUT_CONTENT_START.ITEM_DESCRIPTION,
            }}
        />
    </div>
)