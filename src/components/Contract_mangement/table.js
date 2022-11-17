import React, { useState } from "react"
import { BiEdit } from "react-icons/bi"
import { MdDeleteOutline } from "react-icons/md"
import { RiAttachment2 } from "react-icons/ri"
import { navigate } from "@reach/router"
import Pagination from "./pagination"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { Link } from "gatsby"

const Table = props => {
  const [showperPage, setshowperPage] = useState(4)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showperPage,
  })
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end })
  }
  return (
    <div className="adjust-size">
      <table className="table table-hover ">
        <thead>
          <tr className="table-secondary">
            <th>Contact No.</th>
            <th> Contract Type</th>
            <th> Project Venue</th>
            <th> Project Owner</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Contract Value</th>
            <th>Contigency</th>
            <th>APV (CV+ C)</th>
            <th>Vendor Name</th>
            <th>Vendor Tel.No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.userData
            .slice(pagination.start, pagination.end)
            .map((data, id) => (
              <tr key={id}>
                <td>{data.contract_no}</td>
                <td>{data.contract_type}</td>
                <td>{data.project_venue}</td>
                <td>{data.project_owner}</td>
                <td>{data.start_date}</td>
                <td>{data.end_date}</td>
                <td>{data.contract_value}</td>
                <td>{data.contigency}</td>
                <td>{data.APV}</td>
                <td>{data.vendor_name}</td>
                <td>{data.vendor_Num}</td>
                <td className="d-flex ">
                  <button className="btn btn-outline-secondary m-1">
                    <RiAttachment2 />
                  </button>
                  <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => {
                      navigate(`/app/edit/${data.id}`)
                    }}
                  >
                    <BiEdit />
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger m-1 "
                    onClick={() => props.deleteUser(data.id)}
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex pagination">
        <Pagination
          showperPage={showperPage}
          onPaginationChange={onPaginationChange}
          total={props.userData.length}
        />
        <select
          onChange={e => setshowperPage(e.target.value)}
          className="showperpage"
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <Link to="/app/newcontract">
          {" "}
          <BsFillPlusCircleFill className="react_icon " />
        </Link>
      </div>
    </div>
  )
}

export default Table
