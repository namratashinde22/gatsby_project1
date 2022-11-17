import React, { useEffect, useState } from "react"
import "./pagination.css"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

function Pagination({ showperPage, onPaginationChange, total }) {
  const pages = Math.ceil(total / showperPage)
  const [counter, setCounter] = useState(1)
  const [numbutton, setNumbutton] = useState(pages)

  useEffect(() => {
    const value = showperPage * counter

    onPaginationChange(value - showperPage, value)
  }, [counter])

  const OnButtonclick = type => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1)
      } else setCounter(counter - 1)
    } else if (type === "next") {
      if (pages === counter) {
        setCounter(counter)
      } else setCounter(counter + 1)
    }
  }
  return (
    <div className="d-flex">
      {/* pagination section  */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <span
              onClick={() => OnButtonclick("prev")}
              className="pageanchor   page-link"
            >
              <KeyboardDoubleArrowLeftIcon />
            </span>
          </li>

          {new Array(pages).fill("").map((ele, index) => (
            <li className="page-item page-link  ">
              <span
                className={`page-item ${
                  index + 1 === counter ? "active" : null
                }`}
              >
                <span
                  onClick={() => setCounter(index + 1)}
                  className="pageanchor me-2 "
                >
                  {index + 1}
                </span>
              </span>
            </li>
          ))}

          <li className="page-item">
            <span>
              <span
                onClick={() => OnButtonclick("next")}
                className="pageanchor me-2  page-link"
              >
                <KeyboardDoubleArrowRightIcon />
              </span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Pagination
