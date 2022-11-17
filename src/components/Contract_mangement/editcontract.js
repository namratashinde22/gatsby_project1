import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "@reach/router"
import { navigate } from "gatsby"
// import { useQueryParam, NumberParam } from "use-query-params"

const EditContract = () => {
  const { id } = useParams()
  //   const { id } = useQueryParam("id", NumberParam)
  const [contract, setContract] = useState({
    contract_no: "",
    contract_type: "",
    project_venue: "",
    project_owner: "",
    start_date: "",
    end_date: "",
    contract_value: "",
    contigency: "",
    APV: "",
    vendor_name: "",
    vendor_Num: "",
  })

  const {
    contract_no,
    contract_type,
    project_venue,
    project_owner,
    start_date,
    end_date,
    contract_value,
    contigency,
    APV,
    vendor_name,
    vendor_Num,
  } = contract
  const onInputChange = e => {
    setContract({ ...contract, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadContract()
  }, [])

  const onSubmit = async e => {
    e.preventDefault()
    await axios.put(`http://localhost:3000/contracts/${id}`, contract)
    navigate("/app/contract")
  }

  const loadContract = async () => {
    const result = await axios.get(`http://localhost:3000/contracts/${id}`)
    setContract(result.data)
  }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Contract</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mt-3">
            Contract No:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Contract No"
              required
              name="contract_no"
              value={contract_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Contract Type:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Contract Type"
              required
              name="contract_type"
              value={contract_type}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Project Venue:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Venue"
              required
              name="project_venue"
              value={project_venue}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Project Owner:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Owner"
              required
              name="project_owner"
              value={project_owner}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Start Date:
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder=""
              required
              name="start_date"
              value={start_date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            End Date:
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder=""
              required
              name="end_date"
              value={end_date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Contract Value:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Contract Value"
              required
              name="contract_value"
              value={contract_value}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Contigency:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Contingency"
              name="contigency"
              required
              value={contigency}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            APV:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter APV"
              required
              name="APV"
              value={APV}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Vendor Name:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Vendor Name"
              required
              name="vendor_name"
              value={vendor_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            Vendor Telephone No:
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Vendor Phone No"
              required
              name="vendor_Num"
              value={vendor_Num}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block mt-3 updateBtn">
            Update User
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditContract
