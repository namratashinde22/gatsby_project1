import * as React from "react"
import { FaAlignRight } from "react-icons/fa"
import { IoNotificationsOutline } from "react-icons/io5"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { BiMessageRoundedError } from "react-icons/bi"
import { FcBusinessman } from "react-icons/fc"
import { HiMenuAlt1 } from "react-icons/hi"

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="nav-header">
        <button
          type="button"
          className="toggle-btn"
          onClick={props.toggleSidebar}
        >
          <HiMenuAlt1 />
        </button>
      </div>
      <div className="nav-links">
        <IoNotificationsOutline className="icons shadow-sm  rounded" />
        <AiOutlineQuestionCircle className="icons shadow-sm rounded" />
        <BiMessageRoundedError className="icons shadow-sm  rounded" />
      </div>
      <div className="d-flex ">
        <div>
          <p>CarryLorre</p>
          <p className="admin">Admin</p>
        </div>

        <FcBusinessman className="adminLogo" />
      </div>
    </nav>
  )
}

export default Navbar
