import React from "react"

const Square = ({ marker, index, markSquare }) => {
  return (
    <div className="square" onClick={() => markSquare(index)}>
      {marker}
    </div>
  )
}
export default Square