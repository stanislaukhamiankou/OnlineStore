import { Card, List } from 'antd';
import React from 'react';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
];

export const ShoppingCartList = () => {
    return (
        <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={item.title}>Card content</Card>
            </List.Item>
            )}
        />
    )
}