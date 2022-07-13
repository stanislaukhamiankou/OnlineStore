import { TypographyStack } from 'src/components/_molecules'
import { ABOUT_CONTENT_OUR_MEMBER, LINKS_MEMBER } from 'src/constants'
import { Avatar } from 'src/components/_atoms'

export const AboutContentOurMember = () => (
    <div className="our-member">
        <TypographyStack 
            classNameTypographyFirst="title-about"
            text={
                {
                    item_text_first: ABOUT_CONTENT_OUR_MEMBER.ITEM_TITLE,
                    item_text_second: ABOUT_CONTENT_OUR_MEMBER.ITEM_DESCRIPTION,
                }
            }
        />
        <div className="info-member">
            <div className="about-member">
                <Avatar src={LINKS_MEMBER.ITEM_LINKS_FIRST} />
                <TypographyStack
                    classNameTypographyFirst="name-member" 
                    classNameTypographySecond="text-about-member"
                    text={
                        {
                            item_text_first: ABOUT_CONTENT_OUR_MEMBER.ITEM_NAME_MEMBER_SEO,
                            item_text_second: ABOUT_CONTENT_OUR_MEMBER.ITEM_DESCRIPTION_MEMBER_SEO,
                        }
                    }
                />
            </div>
            <div className="about-member">
                <Avatar src={LINKS_MEMBER.ITEM_LINKS_SECOND} />
                <TypographyStack
                    classNameTypographyFirst="name-member" 
                    classNameTypographySecond="text-about-member"
                    text={
                        {
                            item_text_first: ABOUT_CONTENT_OUR_MEMBER.ITEM_NAME_MEMBER_BA,
                            item_text_second: ABOUT_CONTENT_OUR_MEMBER.ITEM_DESCRIPTION_MEMBER_BA,
                        }
                    }
                />
            </div>
            <div className="about-member">
                <Avatar src={LINKS_MEMBER.ITEM_LINKS_THIRD} />
                <TypographyStack
                    classNameTypographyFirst="name-member" 
                    classNameTypographySecond="text-about-member"
                    text={
                        {
                            item_text_first: ABOUT_CONTENT_OUR_MEMBER.ITEM_NAME_MEMBER_BACK,
                            item_text_second: ABOUT_CONTENT_OUR_MEMBER.ITEM_DESCRIPTION_MEMBER_BACK,
                        }
                    }
                />
            </div>
            <div className="about-member">
                <Avatar src={LINKS_MEMBER.ITEM_LINKS_FOURTH} />
                <TypographyStack
                    classNameTypographyFirst="name-member" 
                    classNameTypographySecond="text-about-member"
                    text={
                        {
                            item_text_first: ABOUT_CONTENT_OUR_MEMBER.ITEM_NAME_MEMBER_FRONT,
                            item_text_second: ABOUT_CONTENT_OUR_MEMBER.ITEM_DESCRIPTION_MEMBER_FRONT,
                        }
                    }
                />
            </div>
        </div>
    </div>
)