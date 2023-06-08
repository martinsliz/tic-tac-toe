import React from 'react'

const Box = ({ value, onClick }) => {
  const style = value === 'X' ? 'box x' : 'box o'
  //this will apply styling based on whether X or O are in the box
  return (
    <div className={style} onClick={onClick}>
      {value}
    </div>
  )
}

export default Box
