import { Categories, Products } from 'src/components/_organisms'
import { Advertising } from 'src/components/_molecules'
import './style.scss'

export const Profile = () => {
    return (
        <div className="profile">
            <Advertising/>
            <Categories />
            <Products/>
        </div>
    )
}
