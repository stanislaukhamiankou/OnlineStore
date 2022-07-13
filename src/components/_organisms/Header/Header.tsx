import {
    HeaderContentCenter,
    HeaderContentLeft,
    HeaderContentRight
} from 'src/components/_molecules'
import './style.scss'

export const Header = () => {
    return (
        <div className="header">
            <HeaderContentLeft />
            <HeaderContentCenter />
            <HeaderContentRight />
        </div>
    )
}