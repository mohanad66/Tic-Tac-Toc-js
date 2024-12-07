import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cells from "./cells.jsx"
function TicTacToc(){
  
}

function App() {
  const [winningMessage,setWinningMessage] = useState("")
  const winingCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const [cells,setCells] = useState(["", "","", "","", "","", "",""])
  const [go,setGo] = useState("O")

  useEffect(() =>{
    winingCombos.forEach(combo => {
      const circleWins = combo.every((cell) => cells[cell] === "O")
      const crossWins = combo.every((cell) => cells[cell] === "X")
      circleWins ? (setWinningMessage("O wins")) : crossWins ? (setWinningMessage("X wins")) : ""
    });
  },[cells , winningMessage])
  useEffect(() =>{
    if(cells.every((cell) => cell !=="") && !winningMessage)
    {
      setWinningMessage("Draw")
    }
  },[cells,winningMessage])
  return(
   <>
      <main className='container'>
        <div className="GameBoard">
          {cells.map((cell,index) => <Cells winningMessage={winningMessage} cell={cell} setGo={setGo} cells={cells} setCells={setCells} go={go} key={index} id={index} />)}
        </div>
        <h1>{winningMessage}</h1>
        <h2>{`it's now ${go} turn`}</h2>
      </main>

      
    </>
  )
}

export default App
