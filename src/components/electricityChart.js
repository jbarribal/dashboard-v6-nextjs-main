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
import { data } from '../../database/electricity_data';

const ElectricityChart = () => {
  return (
    <div>
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kwh" fill="#82ca9d" />
        </BarChart>
    </div>
  )
}

export default ElectricityChart