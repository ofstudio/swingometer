import React from 'react'
import '../styles/ScoreBar.sass'

export default function ScoreBar({score}) {
  const width = Math.abs(50 - score)
  const left = score > 50 ? 50 : 50 - width
  const style = {
    width: `${width}%`,
    left: `${left}%`
  }

  return <div className={'ScoreBar'} style={style}/>
}
