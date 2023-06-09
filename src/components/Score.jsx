const Score = ({ points, currentPlayer }) => {
  const { xPoints, oPoints } = points
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!currentPlayer && 'inactive'}`}>
        X - {xPoints}
      </span>
      <span className={`score o-score ${currentPlayer && 'inactive'}`}>
        O - {oPoints}
      </span>
    </div>
  )
}

export default Score
