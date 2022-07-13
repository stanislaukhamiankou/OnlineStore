import { Image, List, Typography } from 'antd'
import VirtualList from 'rc-virtual-list'
import { useState } from 'react'

import { requestAdvanceOrderAdd } from 'src/redux/advanceOrder/action'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { AllProductsListType } from './AllProductsListType'
import { ITechnique } from 'src/redux/technique/type'
import { setCount } from 'src/redux/count/countSlice'
import { getCount } from 'src/redux/count/getter'
import { Button } from 'src/components/_atoms'
import './style.scss'

export const AllProductsList = ({ data, onScroll, containerHeight }: AllProductsListType) => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(getCount)

  const addCart = (gadget: ITechnique) => {
    dispatch(setCount(count + 1))
    dispatch(requestAdvanceOrderAdd({advanceOrder: {...gadget, count}}))
  }

  return (
    <div className="all-products">
      <List key="1">
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
                    className="avatar"/>
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
      </List>
      </div>
  )
}