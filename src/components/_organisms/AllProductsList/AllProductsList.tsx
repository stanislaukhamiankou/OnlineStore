import { Image, List, Typography } from 'antd'
import VirtualList from 'rc-virtual-list'
import { useState } from 'react'

import { requestAdvanceOrderAdd } from 'src/redux/advanceOrder/action'
import { requestTechniqueInfo } from 'src/redux/technique/actions'
import { AllProductsListType } from './AllProductsListType'
import { ITechnique } from 'src/redux/technique/type'
import { Button } from 'src/components/_atoms'
import { useDispatch } from 'src/redux/hooks'
import './style.scss'

export const AllProductsList = ({ data, containerHeight }: AllProductsListType) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === containerHeight) {
        dispatch(requestTechniqueInfo())
    }
}

  const addCart = (gadget: ITechnique) => {
    dispatch(requestAdvanceOrderAdd({advanceOrder: {...gadget, count}}))
    setCount(count + 1)
  }

  return (
    <div className="all-products">
        <VirtualList
          data={data}
          height={containerHeight}
          itemHeight={100}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item: ITechnique) => (
            <List.Item key={item.id} className="list-item">
              <List.Item.Meta
                avatar={
                  <Image
                    width={250}
                    height={200}
                    src={item.img}
                    className="img"
                  />
                  }
                title={
                  <Typography className="info-about-gadget">
                    {item.make.toUpperCase() + ' ' +  item.name}
                  </Typography>}
                description={
                  <>
                    <Typography className="info-about-gadget">
                      {item.year}
                    </Typography>
                    <Typography className="info-about-gadget">
                      {item.storage}
                    </Typography>
                    <Typography className="info-about-gadget">
                      {item.cpu}
                    </Typography>
                  </>
                }
              />
              <Button
                key={item.id}
                className="view-info"
                onClick={() => addCart(item)}
              >
                Add to cart
              </Button>
            </List.Item>
          )}
        </VirtualList>
      </div>
  )
}