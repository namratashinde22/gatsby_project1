import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const TenancyAreaChart = () => {
    const data = [
        {
          name: "Jan",
          venue: 2000,
         
        },
        {
          name: "Feb",
          venue: 3000,
         
        },
        {
          name: "March",
          venue: 2500,
        
        },
        {
          name: "April",
          venue: 4000,
         
        },
      
      ];
  return (
    <>
     <AreaChart
      width={300}
      height={175}
      data={data}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
      <Area type="monotone" dataKey="venue" stroke="#590696" fill="#D3CEDF" strokeWidth={3} />
    </AreaChart>

    </>
  )
}

export default TenancyAreaChart








