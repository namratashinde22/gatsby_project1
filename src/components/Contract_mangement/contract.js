import axios from "axios"
import React, { useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import "./contract.css"
import Table from "./table"
import { HiOutlineRefresh } from "react-icons/hi"

const Contract = () => {
  const [userData, setUserData] = useState([])

  const [query, setQuery] = useState("")

  const keys = [
    "contract_no",
    "contract_type",
    "project_venue",
    "project_owner",
    "start_date",
    "end_date",
    "contract_value",
    "contigency",
    "APV",
    "vendor_name",
    "vendor_Num",
  ]
  const search = userData => {
    return userData.filter(item =>
      keys.some(key => item[key].toLowerCase().includes(query))
    )
  }
  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    fetch("http://localhost:3000/contracts")
      .then(response => response.json())
      .then(data => {
        setUserData(data)
      })
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3000/contracts/${id}`)
    loadData()
  }

  const refresh = () => {
    setQuery("")
  }

  return (
    <>
      <div className="d-flex filter">
        <div className="searchInputs ">
          <input
            type="text"
            placeholder="search table"
            className="input"
            onChange={e => setQuery(e.target.value.toLowerCase())}
          />
          <div className="searchIcon">
            <BsSearch />
          </div>
        </div>
        <div>
          Contract Type:{" "}
          <select
            className="contractType"
            onChange={e => setQuery(e.target.value.toLowerCase())}
          >
            <option value="" defaultValue>
              All
            </option>
            <option value="term">Term</option>
            <option value="consultation">Consultation</option>
            <option value="construction">Construction</option>
          </select>
        </div>
        <div>
          Project Owner:{" "}
          <select
            className="contractType"
            onChange={e => setQuery(e.target.value.toLowerCase())}
          >
            <option value="" defaultValue>
              All
            </option>
            <option value="jaya">Mr.Jaya</option>
            <option value="shree">Ms.Shree</option>
            <option value="anand">Mr.Anand</option>
            <option value="surya">Mr.Surya</option>
            <option value="surya">Mr.Lee</option>
            <option value="young">Mr.Young Lee</option>
          </select>
        </div>
        <div>
          <button onClick={() => refresh()} className="btnn">
            <HiOutlineRefresh /> Refresh
          </button>
        </div>
      </div>
      <br />
      <Table userData={search(userData)} deleteUser={deleteUser} />
    </>
  )
}

export default Contract
