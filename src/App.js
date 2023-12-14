import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import XPlayer from "./components/XPlayer"
import OPlayer from "./components/OPlayer"



const App = () => {
  
  const [board, setBoard] = useState(Array(9).fill(null))

  
const handleClick = (id) => {

  
  board[id] = "❌"
  setBoard([...board])
  

  board[id] = "⭕️"
  setBoard([...board])


}
  


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square board = {board}
      handleClick ={handleClick}/>
      {/* <XPlayer board = {board}/>
      <OPlayer board = {board}/> */}
    </>
  )
}

export default App