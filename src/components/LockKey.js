import React from 'react'
import '../styles/LockKey.sass'

export default function LockKey({value, inputState, handleClick}) {
  return (
    <div
      className={'LockKey ' + inputState}
      onClick={() => handleClick(value)}
    >
      <span className="digit">
        {value}
      </span>
    </div>
  )
}
