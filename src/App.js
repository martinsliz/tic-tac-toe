import './App.css'
import Board from './components/Board'

import React from 'react'

const App = () => {
  const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  return (
    <div>
      <div>
        <Board board={board} onClick={null} />
      </div>
    </div>
  )
}

export default App
