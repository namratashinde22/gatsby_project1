import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const ContractBarChart
 = () => {
  const data = [
    {
      days: "Sun",
      New: 4000,
      pv: 2400
    },
    {
      days: "Mon",
      New: 3000,
      pv: 1398
    },
    {
      days: "Tue",
      New: 2000,
      In_Progress: 9800
    },
    {
      days: "Wed",
      New: 2780,
      In_Progress: 3908,
      amt: 2000
    },
    {
      days: "Thu",
      New: 1890,
      In_Progress: 4800,
      amt: 2181
    },
    {
      days: "Fri",
      New: 2390,
      In_Progress: 3800,
      amt: 2500
    },
    {
      days: "Sat",
      New: 3490,
      In_Progress: 4300
    }
  ];
  return (
    <>
   



    <BarChart
      width={300}
      height={175}
      data={data}
      
      
      
    >
      <CartesianGrid  />
      <XAxis dataKey="days" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="New" stackId="a" fill="#3a91fb" />
      <Bar dataKey="In_Progress" stackId="a" fill="#00b159" />
    </BarChart>
  

    </>
  )
}

export default ContractBarChart
