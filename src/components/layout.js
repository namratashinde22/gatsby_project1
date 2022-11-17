import * as React from "react"
import Footer from "./footer"
import "./layout.css"
import Navbar from "./navbar"
import Sidebar from "./sidebar/Sidebar"

const Layout = ({ children }) => {
  const [show, setShow] = React.useState(true)

  const toggleSidebar = () => {
    setShow(!show)
  }
  return (
    <div>
      {/* <Navbar /> */}{" "}
      {show && (
        <div className="main container-fluid">
          <div className="side">
            <Sidebar />
          </div>

          <div className="px-3 w-100 bg-light">
            <Navbar toggleSidebar={toggleSidebar} />
            {children}
            <Footer />
          </div>
        </div>
      )}
      {!show && (
        <div className="px-3 w-100 bg-light">
          <Navbar toggleSidebar={toggleSidebar} />
          <div>{children}</div>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Layout
