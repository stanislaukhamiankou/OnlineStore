import {
    AboutContentStatistics,
    AboutContentOurMember,
    AboutContentOurWork,
    AboutContentDescription
} from 'src/components/_organisms'
import './style.scss'

export const About = () => {
    return (
        <div className="about">
            <AboutContentDescription />
            <AboutContentStatistics/>
            <AboutContentOurWork />
            <AboutContentOurMember />
        </div>
    )
}