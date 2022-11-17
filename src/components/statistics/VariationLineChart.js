import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const VariationLineChart = () => {
    
const data = [
    {
      name: "$200k",
      new: 4000,
      complicated: 2400,
      variation: 1000
    },
    {
      name: "$400k",
      new: 9000,
      complicated: 1398,
      variation: 9210
    },
    {
      name: "$600k",
      new: 5000,
      complicated: 9800,
      variation: 1000
    },
    {
      name: "$800k",
      new: 7800,
      complicated: 3908,
      variation: 3000
    },
    {
        name: "$1000k",
        new: 3000,
        complicated: 3908,
        variation: 8000
      },
    
    
  ];
  return (
    <>
   

    <LineChart
       width={300}
      height={175}
      data={data}
     
    >
     
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
      strokeWidth={3}
        type="monotone"
        dataKey="new"
        stroke="#ff0000"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="complicated" stroke="#00b159"  strokeWidth={3} />
      <Line type="monotone" dataKey="variation" stroke="#3a91fb"  strokeWidth={3} />
    </LineChart>

    </>
  )
}

export default VariationLineChart






