import { Button as ButtonANTD } from 'antd'

import { ButtonType } from '.'

export const Button = ({
    className,
    icon,
    children,
    onClick,
    disabled,
}: ButtonType) => (
    <ButtonANTD
        className={className}
        icon={icon}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </ButtonANTD>
)