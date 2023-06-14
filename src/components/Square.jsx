import React from 'react'

const Square = ({ value, onClick }) => {
  const style = value === 'X' ? 'square x' : 'square o'
  //this will apply styling based on whether X or O are in the box
  return (
    <div className={style} onClick={onClick}>
      {value}
    </div>
  )
}

export default Square
