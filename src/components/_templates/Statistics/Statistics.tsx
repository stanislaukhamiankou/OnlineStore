import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/plots'

import './style.scss'

export const Statistics = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      xField: 'year',
      yField: 'gdp',
      seriesField: 'name',
      yAxis: {
        label: {
          formatter: (v: any) => `${(v / 10e8).toFixed(1)} B`,
        },
      },
      smooth: true,
      animation: {
        appear: {
          animation: 'path-in',
          duration: 5000,
        },
      },
    };
  
    return (
        <div className="support">
            <Line {...config} />          
        </div>
    )
}