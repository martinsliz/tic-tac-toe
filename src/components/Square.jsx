import React from 'react'

const Square = ({ value, onClick }) => {
  const style = value === 'X' ? 'square x' : 'square o'
  return (
    <div className={style} onClick={onClick}>
      {value}
    </div>
  )
}

export default Square
