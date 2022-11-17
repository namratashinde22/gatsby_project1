import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>
          (C) Contract Management Application, NLB {new Date().getFullYear()}
        </p>
      </div>
      <div>
        <p>A Singapure Goverment Agency Application</p>
      </div>
    </footer>
  )
}

export default Footer
