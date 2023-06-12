import './App.css'
import { useState } from 'react'
import Score from './components/Score'
import Board from './components/Board'
import { isDisabled } from '@testing-library/user-event/dist/utils'

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
  const [gameOver, setGameOver] = useState(false)
  // const [playCount, setPlayCount] = useState(0)

  const handleClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        // console.log('boxIdx ' + boxIdx, 'idx ' + idx)
        // console.log('current player is ' + currentPlayer)
        return currentPlayer ? 'X' : 'O'
      } else {
        return value
      }
    })
    console.log(updatedBoard)
    setBoard(updatedBoard)

    const checkWinner = (board) => {
      for (let i = 0; i < winResults.length; i++) {
        const [x, y, z] = winResults[i]

        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          setGameOver(true)
          console.log('this is ' + board[x])
          return board[x]
        }
      }
    }

    const winner = checkWinner(updatedBoard)
    if (winner) {
      if (winner === 'O') {
        let { oPoints } = points
        oPoints += 1
        setPoints({ ...points, oPoints })
        console.log('oPoints ' + oPoints)
      } else {
        let { xPoints } = points
        xPoints += 1
        setPoints({ ...points, xPoints })
      }
    }
    setCurrentPlayer(!currentPlayer)
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <Score points={points} currentPlayer={currentPlayer} />
      <Board board={board} onClick={gameOver ? isDisabled : handleClick} />
      <div>
        <button
          onClick={() => {
            resetBoard()
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default App
