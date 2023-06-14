import Square from './Square'

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Square
            value={value}
            onClick={() => value === null && onClick(idx)}
          />
        )
      })}
    </div>
  )
}

export default Board
