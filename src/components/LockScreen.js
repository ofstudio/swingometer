import React, {useState} from 'react'
import delay from 'delay'
import LockInput from './LockInput'
import LockKeyboard from './LockKeyboard'
import '../styles/LockScreen.sass'

const pin = process.env.REACT_APP_PIN_CODE || '0000'

export default function LockScreen({lockMessage, dispatch}) {
  const [input, setInput] = useState('')
  const [inputState, setInputState] = useState('input')

  const handleClick = async value => {
    if (inputState === 'error') return
    const newInput = input.concat(value)
    setInput(newInput)
    if (newInput.length === pin.length) {
      if (newInput === pin) {
        setInputState('success')
        await delay(800)
        dispatch({type: 'unlock'})
      }
      else {
        setInputState('error')
        if (typeof window.navigator.vibrate === 'function') window.navigator.vibrate(300)
        await delay(1500)
        setInput('')
        setInputState('input')
      }
    }
  }

  return (
    <div className={'LockScreen ' + inputState}>
      <span className={'lock-message ' + inputState}>
        {inputState === 'error' ? 'Неверный пин' : lockMessage}
      </span>
      <LockInput
        inputState={inputState}
        maxLength={pin.length}
        position={input.length}
      />
      <LockKeyboard
        inputState={inputState}
        handleClick={handleClick}
      />
    </div>
  )
}
