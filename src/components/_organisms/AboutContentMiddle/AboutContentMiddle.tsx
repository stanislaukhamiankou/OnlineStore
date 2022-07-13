import { TypographyStack } from 'src/components/_molecules'
import { ABOUT_CONTENT_MIDDLE } from 'src/constants'


export const AboutContentMiddle = () => (
    <div>
        <TypographyStack 
            text={
                {
                    item_text_first: ABOUT_CONTENT_MIDDLE.ITEM_TITLE,
                    item_text_second: ABOUT_CONTENT_MIDDLE.ITEM_DESCRIPTION,
                }
            }
            classNameTypographyFirst="title-about"
        />
        <div className="stictics-about-content">
            <TypographyStack
                className="col-uses-about"
                classNameTypographyFirst="number-about"
                text={
                    {
                        item_text_first: ABOUT_CONTENT_MIDDLE.ITEM_STATICTICs.COL_USES,
                        item_text_second: ABOUT_CONTENT_MIDDLE.ITEM_STATICTICs.COL_USES_DESCRIPTION
                    }
                }
            
            />
            <TypographyStack
                className="liked-about"
                classNameTypographyFirst="number-about"
                text={
                    {
                        item_text_first: ABOUT_CONTENT_MIDDLE.ITEM_STATICTICs.LIKED,
                        item_text_second: ABOUT_CONTENT_MIDDLE.ITEM_STATICTICs.LIKED_DESCRIPTION
                    }
                }
            
            />
            <TypographyStack
                className="number-of-orders-about"
                classNameTypographyFirst="number-about"
                text={
                    {
                        item_text_first: ABOUT_CONTENT_MIDDLE.ITEM_STATICTICs.NUMBER_OF_ORDERS,
                        item_text_second: ABOUT_CONTENT_MIDDLE.ITEM_STATICTICs.NUMBER_OF_ORDERS_DESCRIPTION
                    }
                }
            
            />
        </div>
    </div>
)