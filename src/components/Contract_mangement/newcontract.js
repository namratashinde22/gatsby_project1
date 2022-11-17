import axios from "axios"
import React, { useState } from "react"

import "./newcontract.css"

const NewContract = () => {
  const [formData, setFormData] = useState({
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

  const submitHandle = async event => {
    event.preventDefault()
    let response = await axios.post("http://localhost:3000/Contracts", formData)
    if (response) {
      alert("Data submitted succesfully!")
    } else {
      alert("Something went wrong")
    }

    setFormData({
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
  }

  return (
    <div className="bg-white w-100 container-fluid  ">
      <form onSubmit={submitHandle} className="newContract">
        <h4 className="info-text">Contract Information</h4>
        <div className="first-row mb-3">
          <div className="first">
            <h6 className="form-label ">Contract type</h6>
            <select
              className="form-select"
              aria-label=""
              required
              value={formData.contract_type}
              onChange={e =>
                setFormData({
                  ...formData,
                  contract_type: e.target.value,
                })
              }
            >
              <option selected> select</option>
              <option value="term">Term</option>
              <option value="consultation">Consultation</option>
              <option value="construction">Construction</option>
            </select>
          </div>
          <div className="first">
            <h6 className="form-label m-1">Contract number</h6>
            <select
              className="form-select"
              aria-label=""
              required
              value={formData.contract_no}
              onChange={e =>
                setFormData({
                  ...formData,
                  contract_no: e.target.value,
                })
              }
            >
              <option selected> select</option>
              <option value="NLB/TC/006">NLB/TC/006</option>
              <option value="NLB/TC/007">NLB/TC/007</option>
              <option value="NLB/TC/008">NLB/TC/008</option>
              <option value="NLB/TC/009">NLB/TC/009</option>
              <option value="NLB/TC/010">NLB/TC/010</option>
            </select>
          </div>
          <div className="first">
            <h6 className="form-label ">Venue</h6>
            <select
              className="form-select"
              aria-label=""
              required
              value={formData.project_venue}
              onChange={e =>
                setFormData({
                  ...formData,
                  project_venue: e.target.value,
                })
              }
            >
              <option selected> select</option>
              <option value="Chua chu Kang PL">Chua chu Kang PL</option>
              <option value="Chua Sang PL">Chua Sang PL</option>
            </select>
          </div>
        </div>

        <div className="first-row mb-3">
          <div className="first">
            <h6 htmlFor="abbriviation" className="form-label">
              Abbriviation
            </h6>
            <input
              className="form-control"
              type="text"
              aria-label="abbriviation"
              required
            />
          </div>
          <div className="first">
            <h6 htmlFor="project-title" className="form-label">
              Project-Title
            </h6>
            <input
              className="form-control"
              type="text"
              aria-label="project-title"
              required
            />
          </div>
          <div className="first">
            <h6 htmlFor="project-owner" className="form-label">
              Project Owner
            </h6>
            <input
              className="form-control"
              type="text"
              aria-label="project-owner"
              required
              value={formData.project_owner}
              onChange={e =>
                setFormData({
                  ...formData,
                  project_owner: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="first-row mb-3">
          <div className="first">
            <h6 className="form-label" htmlFor="start-date">
              Start Date
            </h6>
            <input
              className="form-control"
              type="date"
              aria-label="start-date "
              required
              value={formData.start_date}
              onChange={e =>
                setFormData({
                  ...formData,
                  start_date: e.target.value,
                })
              }
            />
          </div>
          <div className="first">
            <h6 className="form-label" htmlFor="end-date">
              End Date
            </h6>
            <input
              className="form-control"
              type="date"
              aria-label="end-date "
              required
              value={formData.end_date}
              onChange={e =>
                setFormData({
                  ...formData,
                  end_date: e.target.value,
                })
              }
            />
          </div>
        </div>

        <h4 className="info-text">Value</h4>
        <div className="first-row mb-3">
          <div className="first">
            <h6 htmlFor="contract-value" className="form-label">
              Contract Value
            </h6>
            <input
              className="form-control"
              type="number"
              aria-label="contract-value"
              required
              value={formData.contract_value}
              onChange={e =>
                setFormData({
                  ...formData,
                  contract_value: e.target.value,
                })
              }
            />
          </div>
          <div className="first">
            <h6 htmlFor="contigency" className="form-label">
              Contigency
            </h6>
            <input
              className="form-control"
              type="text"
              aria-label="contigency"
              required
              value={formData.contigency}
              onChange={e =>
                setFormData({
                  ...formData,
                  contigency: e.target.value,
                })
              }
            />
          </div>
          <div className="first">
            <h6 htmlFor="apv" className="form-label">
              APV(CV+V)
            </h6>
            <input
              required
              className="form-control"
              type="text"
              aria-label="apv"
              value={formData.APV}
              onChange={e =>
                setFormData({
                  ...formData,
                  APV: e.target.value,
                })
              }
            />
          </div>
        </div>

        <h4 className="info-text">Vendor Information</h4>
        <div className="first-row mb-3">
          <div className="first">
            <h6 htmlFor="vendor-name" className="form-label">
              Vendor Name
            </h6>
            <input
              className="form-control"
              type="text"
              aria-label="vendor-name"
              required
              value={formData.vendor_name}
              onChange={e =>
                setFormData({
                  ...formData,
                  vendor_name: e.target.value,
                })
              }
            />
          </div>
          <div className="first">
            <h6 htmlFor="vendor-pic" className="form-label">
              Vendor PIC
            </h6>
            <input
              className="form-control"
              type="text"
              aria-label="vendor-pic"
              required
            />
          </div>
          <div className="first">
            <h6 htmlFor="vendor-number" className="form-label">
              Vendor Contact Number
            </h6>
            <input
              className="form-control"
              type="text"
              placeholder="+2384 8585 8585"
              aria-label="vendor-number"
              required
              value={formData.vendor_Num}
              onChange={e =>
                setFormData({
                  ...formData,
                  vendor_Num: e.target.value,
                })
              }
            />
          </div>
        </div>

        <h4 className="info-text">Upload Documents</h4>
        <div className="upload-file mb-3">
          <div className="file">
            <h6 htmlFor="formFile" className="form-label">
              Upload File
            </h6>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>

        <h4 className="info-text">Remarks</h4>
        <div className="remarks">
          <div className="remark">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>

            <div className="buttons mt-3">
              <div className="m-2">
                <button className="btn btn-secondary" type="reset">
                  Cancel
                </button>
              </div>
              <div className="m-2">
                <button className="btn btn-light create_btn" type="submit">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewContract
