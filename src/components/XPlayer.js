import React from "react"

const XPlayer = (props) => {
  return (
    <div className="grid"> 
        {props.board.map((value, index) => {
          return(
            <main key={index}>
            <div 
            className = "square" 
            onClick={() => 
              props.handleClick(index)}
              >
              {value}
            </div>
            </main>
          )
        })}
    </div>
  )
}
export default XPlayer