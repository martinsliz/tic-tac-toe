import './App.css'
import { useState } from 'react'
import Board from './components/Board'

const App = () => {
  const winResults = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [currentPlayer, setCurrentPlayer] = useState(true)

  const [board, setBoard] = useState(Array(9).fill(null))
  const [points, setPoints] = useState({ xPoints: 0, oPoints: 0 })

  const handleClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return currentPlayer ? 'X' : 'O'
      } else {
        return value
      }
    })
    setBoard(updatedBoard)

    const checkWinner = (board) => {
      for (let i = 0; i < winResults.length; i++) {
        const [x, y, z] = winResults[i]

        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          console.log(board[x])
          return board[x]
        }
      }

      const winner = checkWinner(updatedBoard)
      if (winner) {
        if (winner === 'O') {
          let { oPoints } = points
          oPoints += 1
          setPoints({ ...points, oPoints })
        } else {
          let { xPoints } = points
          xPoints += 1
          setPoints({ ...points, xPoints })
        }
      }
      console.log(points)
    }
    setCurrentPlayer(!currentPlayer)
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleClick} />
      <div>
        <button>START OVER</button>
      </div>
    </div>
  )
}

export default App
