import React from 'react'
import '../styles/LockInput.sass'

export default function LockInput({inputState, maxLength, position}) {
  const dots = [...Array(maxLength).keys()]
    .map(i =>
      <span
        key={i.toString()}
        className={'dot ' + inputState + (i < position ? ' filled' : '')}
      />
    )

  return (
    <div className="LockInput">
      {dots}
    </div>
  )
}
