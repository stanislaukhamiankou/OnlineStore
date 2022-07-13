import {
    AboutContentMiddle,
    AboutContentOurMember,
    AboutContentOurWork,
    AboutContentStart
} from 'src/components/_organisms'
import './style.scss'

export const About = () => {
    return (
        <div className="about">
            <AboutContentStart />
            <AboutContentMiddle />
            <AboutContentOurWork />
            <AboutContentOurMember />
        </div>
    )
}