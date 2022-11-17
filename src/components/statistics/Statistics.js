import React, { useEffect, useState } from "react"
import "./Statistics.css"

import ContractBarChart from "./ContractBarChart"

import ContractRadialChart from "./ContractRadialChart"
import TenancyAreaChart from "./TenancyAreaChart"
import ProgressBarChart from "./ProgressBarChart"
import VariationLineChart from "./VariationLineChart"

const Statistics = () => {
  return (
    <>
      <div className="container mt-3">
        {/* first row  */}
        <div className="row">
          {/* first chart  */}
          <div className="col">
            <div className="card">
              {/* <div className="card-body"> */}
              <div className="heading">
                <h6>Contracts</h6>
              </div>
              <ContractBarChart />
            </div>
            {/* </div> */}
          </div>
          {/* second chart  */}
          <div className="col">
            <div className="card">
              {/* <div className="card-body"> */}
              <div className="heading">
                <h6>Tenancy and Leasing</h6>
              </div>
              <TenancyAreaChart />
            </div>
            {/* </div> */}
          </div>
          {/* Third chart  */}
          <div className="col chart3">
            <div className="card p-4">
              {/* <div className="card-body"> */}
              <div className="heading">
                <h6>Contracts (%)</h6>
              </div>
              <ContractRadialChart />
            </div>
            {/* </div> */}
          </div>
        </div>
        <br />
        <br />

        {/* second row  */}
        <div className="row">
          {/* fourth chart  */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="heading">
                  <h6>Tenancy and Leasing</h6>
                </div>
                <VariationLineChart />
              </div>
            </div>
          </div>
          <div className="card progress_chart">
            <div className="card-body">
              <div className="heading">
                <h6> Progress Chart</h6>
              </div>
              <ProgressBarChart />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default Statistics
