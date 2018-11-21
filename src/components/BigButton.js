import React from 'react'
import '../styles/BigButton.sass'

export default function BigButton({type, dispatch, nextScene}) {
  return (
    <div
      className={'BigButton ' + type}
      onClick={() => dispatch({type: 'switch-scene', scene: nextScene})}
    />
  )
}
