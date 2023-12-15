import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  // creates an array of nine null values
  const [squares, setSquares] = useState(Array(9).fill(null))
  // creates a current player that starts with X
  const [currentPlayer, setCurrentPlayer] = useState("❌")
  // creates a winner that starts as null
  const [winner, setWinner] = useState(null)

  // function that handles the marking of the square
  const markSquare = (currentSquare) => {
    // prohibits marking a square if the square was already taken or the game was won
    if (squares[currentSquare] === null && !winner) {
      // updates the current square to the current player
      squares[currentSquare] = currentPlayer
      // sets the updated array in state
      setSquares(squares)
      // calls the function that alternates the current player
      changePlayer()
    }
    // calls the function that checks if the game has been won
    checkWinCondition()
  }

  const changePlayer = () => {
    // toggles between X and O and updates the current player value
    setCurrentPlayer(currentPlayer === "❌" ? "⭕️" : "❌")
  }

  const checkWinCondition = () => {
    // array of all possible winning conditions
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // iterating through all the possible winning conditions
    winConditions.forEach((possibleWins) => {
      // if the value of the square array at all three of the win condition indexes are X then X won the game
      if (
        squares[possibleWins[0]] === "❌" &&
        squares[possibleWins[1]] === "❌" &&
        squares[possibleWins[2]] === "❌"
      ) {
        // sets the winner to X
        setWinner("❌")
        // if the value of the square array at all three of the win condition indexes are O then O won the game
      } else if (
        squares[possibleWins[0]] === "⭕️" &&
        squares[possibleWins[1]] === "⭕️" &&
        squares[possibleWins[2]] === "⭕️"
      ) {
        // sets the winner to O
        setWinner("⭕️")
      }
    })
  }

  const restartGame = () => {
    setSquares(Array(9).fill(null))
    setCurrentPlayer("❌")
    setWinner(null)
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
      <div className="restart-button">
        <button onClick={restartGame}>Restart Game</button>
      </div>
      {winner && <p className="winner">The winner is {winner}!</p>}
    </>
  )
}

export default App
