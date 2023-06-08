import React from 'react'

const Score = ({ points, currentPlayer }) => {
  const { xPoints, oPoints } = points
  return (
    <div className="score">
      <span className="score">X - {xPoints}</span>
      <span>O - {oPoints}</span>
    </div>
  )
}

export default Score
