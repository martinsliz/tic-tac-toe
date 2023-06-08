import './App.css'
import Board from './components/Board'
import Box from './components/Box'

import React from 'react'

const App = () => {
  const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  return (
    <div>
      <div>
        <Board board={board} />
        <Box value="X" onClick={null} />
      </div>
    </div>
  )
}

export default App
