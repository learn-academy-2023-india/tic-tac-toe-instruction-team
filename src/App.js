import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  // creates an array of nine null values
  const [squares, setSquares] = useState(Array(9).fill(null))
  // creates a current player that starts with X
  const [currentPlayer, setCurrentPlayer] = useState("X")

  // function that handles the marking of the square
  const markSquare = (currentSquare) => {
    // prohibits marking a square if the square was already taken
    if (squares[currentSquare] === null) {
      // creates a copy of the array so that it can be updated
      const marker = [...squares]
      // updates the current square to the current player
      marker[currentSquare] = currentPlayer
      // sets the updated array in state
      setSquares(marker)
      // calls the function that alternates the current player
      changePlayer()
    }
  }

  const changePlayer = () => {
    // toggles between X and O and updates the current player value
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="squares">
        {squares.map((marker, index) => {
          return (
            <Square
              marker={marker}
              index={index}
              key={index}
              markSquare={markSquare}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
