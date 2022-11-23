import React from 'react'
import { BarChart, Bar } from "recharts";
import { data } from '../../database/data';

const Chart = () => {
  return (
    <div>
        <BarChart width={500} height={300} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    </div>

  )
}

export default Chart