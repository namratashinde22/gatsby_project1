import React from "react"
import "./dashboard.css"
import { BsSearch } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import Cards from "./card"
import Statistics from "../statistics/Statistics"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { Link } from "gatsby"

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="dashboard">
          <div>
            <p className="library">Welocome to National Library Board</p>
            <p className="management">Contract Management Application</p>
          </div>
          <div className="dashboard2">
            <div className="searchInputs">
              <input type="text" placeholder="search here" className="input" />
              <div className="searchIcon">
                <BsSearch />
              </div>
            </div>
            <div>
              <FiSettings className="settings" />
            </div>
          </div>
        </div>
        <div>
          <Link to="/app/newcontract">
            {" "}
            <BsFillPlusCircleFill className="react_icon " />
          </Link>
        </div>
        <Cards />
        <Statistics />
      </div>
    </>
  )
}

export default Dashboard
