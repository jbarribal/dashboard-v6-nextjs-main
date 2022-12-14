import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { doubleData } from '../../database/data';

const TotalChart = () => {
  return (
    <div>
        <BarChart
        width={450}
        height={300}
        data={doubleData}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    </div>
  )
}

export default TotalChart