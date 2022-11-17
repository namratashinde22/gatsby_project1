import React from "react"
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineAssignment } from "react-icons/md"
import { MdPersonAddAlt } from "react-icons/md"
import { IoNewspaperOutline } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { IoNotificationsOutline } from "react-icons/io5"
import { TbLogout } from "react-icons/tb"
import { RiDashboardLine } from "react-icons/ri"
import { BsArrowsExpand } from "react-icons/bs"

import "./Sidebar.css"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
const Sidebar = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="logoDiv">
          <img
            src="https://sure.nlb.gov.sg/images/nl-logo.jpg"
            alt="nlb-logo"
            className="nlbLogo"
          />
        </div>

        {/* SideBar Section  */}
        <section className="sidebar">
          <div className="sidebarList">
            <div
              className="sidebarItem"
              onClick={() => navigate("/app/dashboard")}
            >
              <RiDashboardLine className="sidebarLogo" />
              <Link to="/app/dashboard"> Dashboard </Link>
            </div>
            <div
              className="sidebarItem"
              onClick={() => navigate("/app/contract")}
            >
              <MdOutlineAssignment className="sidebarLogo" />
              <Link to="/app/contract">Contract Management</Link>
            </div>
            <div className="sidebarItem">
              <BsArrowsExpand className="sidebarLogo" />
              <Link>Request for Variation Order</Link>
            </div>
            <div className="sidebarItem">
              <RiLockPasswordLine className="sidebarLogo" />
              <Link>Tenancy & Leasing </Link>
            </div>
            <div className="sidebarItem">
              <MdPersonAddAlt className="sidebarLogo" />
              <Link>Administative Functions</Link>
            </div>
            <div className="sidebarItem">
              <IoNewspaperOutline className="sidebarLogo" />
              <Link>Reoprts/Query Module</Link>
            </div>
            <div className="sidebarItem">
              <IoNotificationsOutline className="sidebarLogo" />
              <Link>Notifications</Link>
            </div>
            <div className="sidebarItem">
              <FiSettings className="sidebarLogo" />
              <Link>Settings</Link>
            </div>
            <div className="sidebarItem">
              <TbLogout className="sidebarLogo" />
              <Link>Logout</Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Sidebar
