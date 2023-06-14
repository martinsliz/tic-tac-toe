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
  let [xWin, setXwin] = useState(0)
  let [oWin, setOwin] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  let [playCount, setPlayCount] = useState(0)

  const handleClick = (square) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === square && value === null) {
        setPlayCount((playCount += 1))
        return currentPlayer ? 'X' : 'O'
      } else {
        return value
      }
    })
    console.log(updatedBoard)
    setBoard(updatedBoard)

    const resetBoard = () => {
      setGameOver(false)
      setBoard(Array(9).fill(null))
      setPlayCount(0)
      setCurrentPlayer(currentPlayer)
    }
    const checkWinner = (board) => {
      for (let i = 0; i < winResults.length; i++) {
        const [x, y, z] = winResults[i]

        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          setGameOver(true)
          console.log('Winner is ' + board[x])
          return board[x]
        } else if (playCount === 9) {
          alert('No win, keep playing!')
          resetBoard()
        }
      }
    }

    const winner = checkWinner(updatedBoard)
    if (winner) {
      if (winner === 'O') {
        let { oPoints } = points
        oPoints += 1
        setPoints({ ...points, oPoints })
        setOwin((oWin += 1))
        resetBoard()
      } else if (winner === 'X') {
        let { xPoints } = points
        xPoints += 1
        setPoints({ ...points, xPoints })
        setXwin((xWin += 1))
        resetBoard()
      }
    }
    setCurrentPlayer(!currentPlayer)
  }

  return (
    <div className="App">
      <Score points={points} currentPlayer={currentPlayer} />
      <Board
        board={board}
        onClick={gameOver ? isDisabled : handleClick}
        playCount={playCount}
      />
      <div>
        <div className="draw">
          {playCount === 9 ? <h2>It's a Draw!</h2> : <h3> </h3>}
        </div>
        <div className="draw">
          {xWin === 3 ? <h2>X Wins!!</h2> : <h5> </h5>}
          {oWin === 3 ? <h2>O Wins!!</h2> : <h5> </h5>}
        </div>
        <button
          onClick={() => {
            window.location.reload()
          }}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default App
