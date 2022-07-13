import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Avatar, Button, Image, Typography } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'

import { CardContentType } from '.'
import './style.scss'

export const CardContent = ({src, text, deleteItemCart}: CardContentType) => (
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
                    Add more
                </Typography>
                <ButtonGroup className="counter">
                    <Button>
                        <MinusOutlined />
                    </Button>
                    <Button>
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