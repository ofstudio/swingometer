import React from 'react'
import LockKey from './LockKey'
import '../styles/LockKeyboard.sass'

export default function LockKeyboard(props) {
  return (
    <div className={'LockKeyboard ' + props.inputState}>
      <div className="row">
        <LockKey value="1" {...props}/>
        <LockKey value="2" {...props}/>
        <LockKey value="3" {...props}/>
      </div>
      <div className="row">
        <LockKey value="4" {...props}/>
        <LockKey value="5" {...props}/>
        <LockKey value="6" {...props}/>
      </div>
      <div className="row">
        <LockKey value="7" {...props}/>
        <LockKey value="8" {...props}/>
        <LockKey value="9" {...props}/>
      </div>
    </div>
  )
}
