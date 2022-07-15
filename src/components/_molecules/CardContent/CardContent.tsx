import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Image, Typography } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { useState } from 'react'

import { CardContentType } from '.'
import './style.scss'

export const CardContent = ({src, text, deleteItemCart}: CardContentType) => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1);
    }
    
    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount)
    }

    return (
        <div className="card-content">
            <div className="card-img">
                <Image
                    width={200}
                    height={200}
                    src={src}
                />
            </div>
            <div className="card-description">
                <Typography className="card-description-text">
                    {text}
                </Typography>
                <div className="counter-content">
                    <Typography className="text-counter">
                        Add more: {count + 1}
                    </Typography>
                    <ButtonGroup className="counter">
                        <Button onClick={decline}>
                            <MinusOutlined />
                        </Button>
                        <Button onClick={increase}>
                            <PlusOutlined />
                        </Button>
                        <Button>
                            <DeleteOutlined onClick={deleteItemCart}/>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}