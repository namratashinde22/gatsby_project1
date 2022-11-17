import React from "react"
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineAssignment } from "react-icons/md"
import { MdPersonAddAlt } from "react-icons/md"
import { IoNewspaperOutline } from "react-icons/io5"
import { navigate } from "gatsby"

const Cards = () => {
  return (
    <div className="container">
      <div className="row roww">
        <div className="card-container">
          <div className="card my-2">
            <div
              className="card-body card1"
              onClick={() => {
                navigate("/app/contract")
              }}
            >
              <MdOutlineAssignment className="assignIcon redIcon" />
              <div>
                <p className="card-text">Contract Management</p>
                <p className="card-text-num">2456</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card my-2">
            <div className="card-body card2">
              <RiLockPasswordLine className="assignIcon greenIcon" />
              <div>
                <p className="card-text">Tenancy and Leasing</p>
                <p className="card-text-num">215</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card my-2">
            <div className="card-body card3">
              <MdPersonAddAlt className="assignIcon blueIcon" />
              <div>
                <p className="card-text">Administative Functions</p>
                <p className="card-text-num">24</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card my-2">
            <div className="card-body card4">
              <IoNewspaperOutline className="assignIcon indigoIcon" />
              <div>
                <p className="card-text">Report/Query Module</p>
                <p className="card-text-num">654</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
