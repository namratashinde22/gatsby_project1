import React from 'react'
import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
  
  } from "recharts";

const ProgressBarChart = () => {
    const chartData = [
        {
          value: "100k",
          contigency: "150",
          APV: "1150",
          year: "2011",
        },
        {
          value: "100k",
          constigency: "1150",
          APV: "1250",
          year: "2012",
        },
        {
          value: "100k",
          contigency: "150",
          APV: "1350",
          year: "2013",
        },
        {
          value: "100k",
          contigency: "150",
          APV: "1150",
          year: "2014",
        },
        {
          value: "90k",
          contigency: "1500",
          APV: "1550",
          year: "2015",
        },
      ]
  return (
    <>
        <ResponsiveContainer width="100%" aspect={2}>
                  <BarChart 
                   
                  data={chartData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="year" fill="#3a91fb" />
                    <Bar dataKey="contigency" fill="#00b159" />
                    <Bar dataKey="APV" fill="#ff0000" />
                  </BarChart>
                </ResponsiveContainer>
    </>
  )
}

export default ProgressBarChart