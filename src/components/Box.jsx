import React from 'react'

const Box = ({ value, onClick }) => {
  const style = value === 'X' ? 'box x' : 'box o'
  //this will apply styling based on whether X or O are in the box
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  )
}

export default Box
