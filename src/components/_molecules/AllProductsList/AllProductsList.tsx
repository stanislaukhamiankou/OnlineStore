import React, { useEffect, useState } from 'react'
import { Image, List, Typography } from 'antd'
import VirtualList from 'rc-virtual-list'

import { ButtonDefault } from '../../_atoms'
import './style.scss'
import { routes } from '../../../router/Config/config.routes'
import useRouter from '../../../hooks/useRouter'

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 600;

export const AllProductsList = () => {
  const [data, setData] = useState<UserItem[]>([])
  const { push } = useRouter()

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        setData(data.concat(body.results))
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={100}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={
                <Image
                  src={item.picture.large}
                  className="avatar"/>
                }
              title={
                <Typography className="info-about-gadget">
                  {item.name.last}
                </Typography>}
              description={
                <Typography className="info-about-gadget">
                  {item.email}
                </Typography>
              }
            />
            <ButtonDefault
              className="view-info"
              onClick={() => push(routes.productsid)}
            >
              View
            </ButtonDefault>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};