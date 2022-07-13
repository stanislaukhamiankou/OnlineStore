import React,{ useEffect } from 'react'

import { AllProductsList, FormFilterCatalog } from 'src/components/_organisms'
import { requestTechniqueInfo } from 'src/redux/technique/actions'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getTechniqueInfo } from 'src/redux/technique/getters'
import { Advertising } from 'src/components/_molecules'
import { containerHeight } from 'src/helper/helper'
import './style.scss'
import { Typography } from 'antd'

export const AllProducts = () => {
    const technique = useAppSelector(getTechniqueInfo)
    const dispatch = useAppDispatch()

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === containerHeight) {
            dispatch(requestTechniqueInfo())
        }
    }
    
    useEffect(() => {
        dispatch(requestTechniqueInfo())
    }, [])

    return (
        <div>
            <div className="catalog">
                <Advertising />
                <div className="catalog-content">
                    <FormFilterCatalog
                        data={technique}
                        />
                    <AllProductsList
                        data={technique}
                        onScroll={onScroll}
                        containerHeight={containerHeight}
                        />
                </div>
            </div>
        </div>
    )
}