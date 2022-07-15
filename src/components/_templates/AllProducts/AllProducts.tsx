import React,{ useEffect } from 'react'
import { Input } from 'antd'

import { setFilteredTechnique } from 'src/redux/technique/techniqueSlice'
import { requestTechniqueInfo } from 'src/redux/technique/actions'
import { useDispatch, useSelector } from 'src/redux/hooks'
import { getFiltered, getTechniqueInfo } from 'src/redux/technique/getters'
import { AllProductsList } from 'src/components/_organisms'
import { ITechnique } from 'src/redux/technique/type'
import { containerHeight } from 'src/helper/helper'
import './style.scss'

export const AllProducts = () => {
    const technique = useSelector(getTechniqueInfo)
    const filtered = useSelector(getFiltered)
    const dispatch = useDispatch()

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => 
        dispatch(setFilteredTechnique(event.target.value))

    const filterTech = technique.filter((item: ITechnique) => 
        item.name.includes(filtered)
    )
    
    useEffect(() => {
        dispatch(requestTechniqueInfo())
    }, [])

    return (
        <div className="catalog">
            <Input
                placeholder="Search name model"
                onChange={onSearch}
                style={{ width: 400}}
            />
            <AllProductsList
                data={filterTech}
                containerHeight={containerHeight}
            />
        </div>
    )
}