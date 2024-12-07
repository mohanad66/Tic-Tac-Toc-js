import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Cell = ({go,setGo,id,cells,setCells,cell,winningMessage}) =>{
   
    const handleClick = (e)=>{
      const notTaken = !cells[id]
      console.log(cells)
      if(winningMessage.trim() !=="")
      {
        return;
      }
      if(notTaken)
      {
        if(go === "X")
          {
            handleCellChange("X")
            e.target.value = go
            setGo("O")
          }else if(go === "O")
          {
            handleCellChange("O")
            
            e.target.value = go
            setGo("X")
          }
      }
    }
    const handleCellChange = (cellChange) =>{ 
      let copyCells = [...cells]
      copyCells[id] = cellChange
      setCells(copyCells)
    }
    return(
        <div onClick={handleClick} className="cells">
            <div className={cell}>
                <h2>{cell ? (cell === "O" ? "O" : "X"): ""}</h2>
            </div>
        </div>
    )
}
export default Cell;