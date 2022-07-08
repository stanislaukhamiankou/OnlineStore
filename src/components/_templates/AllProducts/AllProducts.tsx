import { AudioOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd'

import { AllProductsList } from '../../_molecules'
import './style.scss'

const { Search } = Input;

export const AllProducts = () => {

    const onSearch = (value: string) => console.log(value);
    
    return (
        <div className="all-products">
            {/* <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    size="large"
                    onSearch={onSearch}
                />
            </Space> */}
            <AllProductsList />
        </div>
    )
}