import React from "react"
import {
  ResponsiveContainer,
  Tooltip,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts"

const ContractRadialChart = () => {
  const radialChart = [
    {
      new: "70",
      in_progress: "80",
      complicated: "90",
    },
    {
      new: "80",
      in_progress: "40",
      complicated: "50",
    },
    {
      new: "90",
      in_progress: "95",
      complicated: "30",
    },
  ]
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={radialChart}
          startAngle={270}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="new"
            fill="#ff0000"
          />
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="in_progress"
            fill="#00b159"
          />
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="complicated"
            fill="#3a91fb"
          />

          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  )
}

export default ContractRadialChart
